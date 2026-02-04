"use server";

import { adminAuth, adminDb } from "@/lib/firebase-admin";
import { MAX_USAGE } from "@/lib/constants";

export async function generateImageAction(
  token: string, 
  strokesJson: string, 
  prompt: string,
  imageBase64: string = ""
) {
  try {
    // 1. Input Validation
    if (!token || !strokesJson || !imageBase64) {
      throw new Error("Missing required parameters: token, strokes, or image data");
    }

    const strokes = JSON.parse(strokesJson);
    if (!Array.isArray(strokes) || strokes.length === 0) {
        throw new Error("Invalid stroke data");
    }

    // 2. Authentication & Authorization
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userEmail = decodedToken.email;
    
    if (!userEmail) throw new Error("User email not found in token");

    // 3. Usage Limits (Atomic Transaction)
    const userRef = adminDb.collection("pareidolia_users").doc(userEmail);
    await adminDb.runTransaction(async (t) => {
        const doc = await t.get(userRef);
        const currentCount = doc.exists ? (doc.data()?.generationCount || 0) : 0;
        
        if (currentCount >= MAX_USAGE) {
            throw new Error("LIMIT_REACHED");
        }
        
        t.set(userRef, { generationCount: currentCount + 1 }, { merge: true });
    });

    // 4. Generate Image (Gemini)
    const googleApiKey = process.env.GOOGLE_API_KEY;
    if (!googleApiKey) throw new Error("Missing Server Configuration: GOOGLE_API_KEY");

    const modelName = "gemini-2.5-flash-image";
    const promptContext = prompt ? `to represent a "${prompt}"` : "to represent an object";
    
    const systemPrompt = `You are a collaborative sketchbook artist.
    
    The user has started drawing a "${prompt || "object"}" but only drew the abstract shape.
    
    **CRITICAL REASONING STEP:**
    Before drawing, you must map the user's lines to the anatomy of a "${prompt || "object"}".
    - Ask yourself: "If this random curve were a part of a ${prompt || "object"}, which part would it be?"
    - Example: "This hump looks like the shoulders, so I will add a head next to it."
    - You must construct the object *around* the user's lines, using them as the absolute spine/contour.

    STRICT RULES:
    1. **ADDITIVE ONLY**:
       - Do NOT redraw the user's lines.
       - Do NOT generate a new image. 
       - You must keep the user's pixels exactly where they are and just *add* to them.

    2. **MINIMALISM (CRITICAL)**:
       - Add NO MORE than 5 to 15 simple strokes.
       - Just add the "identifying features" (e.g., if it's a fish, add one eye, one fin, and a tail line. That's it).
       - No shading. No coloring. No complex textures.

    3. **RESPECT THE DISTORTION**:
       - If the user's shape is bent, twisted, or ugly, the final object MUST be bent, twisted, or ugly.
       - Do NOT fix the anatomy. If they drew a square blob and called it a fish, you draw a fin on the square blob.

    4. **STYLE MATCH**:
       - Use the exact same black ink stroke style. 
       - The final result should look like one continuous simple sketch.

    Output AN IMAGE that is visually identical to the input, except for the few small details you added.`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${googleApiKey}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [
                        { inlineData: { mimeType: "image/png", data: imageBase64 } },
                        { text: systemPrompt },
                    ],
                }],
                generationConfig: {
                    responseModalities: ["IMAGE"],
                    imageConfig: { aspectRatio: "4:3" },
                },
            }),
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API request failed: ${errorText}`);
    }

    const data = await response.json();
    const candidatePart = data?.candidates?.[0]?.content?.parts?.find(
        (p: any) => p?.inlineData?.data || p?.inline_data?.data
    );
    const generatedImageBase64 = candidatePart?.inlineData?.data || candidatePart?.inline_data?.data;

    if (!generatedImageBase64) {
        throw new Error("Gemini response did not contain an image.");
    }

    return { 
      success: true, 
      strokes: [], // Client handles vectorization
      image: generatedImageBase64, 
      description: prompt || "AI Completion"
    };

  } catch (error: any) {
    console.error("GenerateImage Action Error:", error);

    if (error.message === "LIMIT_REACHED") {
        return { success: false, error: "You have reached your free limit of 5 images." };
    }
    
    if (error.code === 'auth/id-token-expired' || error.code === 'auth/argument-error') {
        return { success: false, error: "Authentication failed. Please sign in again." };
    }

    return { success: false, error: error.message || "Failed to generate image" };
  }
}
