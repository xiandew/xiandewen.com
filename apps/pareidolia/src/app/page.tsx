"use client";

import { useEffect, useRef, useState } from "react";
import { Download, RefreshCw, Wand2, LogIn, LogOut, Loader2 } from "lucide-react";
import clsx from "clsx";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User
} from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, googleProvider, db } from "@/lib/firebase";
import { generateImageAction } from "@/lib/actions/generate-image";
import { MAX_USAGE } from "@/lib/constants";
// @ts-ignore
import ImageTracer from 'imagetracerjs';

const PREDEFINED_PROMPTS = [
  "House",
  "Dragon",
  "Bird",
  "Face",
  "Flower",
  "Tree",
  "Butterfly",
  "Cat",
  "Car",
  "Fish",
];

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Processing...");
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [promptText, setPromptText] = useState(PREDEFINED_PROMPTS[0]);

  const [strokes, setStrokes] = useState<Array<Array<[number, number]>>>([]);
  const [currentStroke, setCurrentStroke] = useState<Array<[number, number]>>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  // Auth & Limits
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [usageCount, setUsageCount] = useState(0);

  // Initialize Canvas with dot grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 600;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    redrawCanvas();
  }, []);

  // Redraw canvas with visible dot grid
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    console.log("Redrawing canvas. Strokes count:", strokes.length);

    // White background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw strokes
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    console.log("Canvas stroke style:", ctx.strokeStyle, "lineWidth:", ctx.lineWidth);

    if (strokes && Array.isArray(strokes)) {
      console.log("Drawing", strokes.length, "strokes");
      strokes.forEach((stroke, idx) => {
        if (!Array.isArray(stroke) || stroke.length < 2) {
          console.warn(`Stroke ${idx} invalid:`, stroke);
          return;
        }

        console.log(`Drawing stroke ${idx} with ${stroke.length} points. First point:`, stroke[0], "Type:", typeof stroke[0]);

        // Set style for each stroke
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;

        ctx.beginPath();
        const [startX, startY] = stroke[0];
        console.log(`MoveTo: ${startX}, ${startY}`);
        ctx.moveTo(startX, startY);

        // Draw smooth curves using bezier if we have enough points
        if (stroke.length >= 4) {
          // Use quadratic or cubic curves for smooth lines
          for (let i = 1; i < stroke.length - 2; i += 3) {
            const [cp1x, cp1y] = stroke[i];
            const [cp2x, cp2y] = stroke[i + 1];
            const [x, y] = stroke[i + 2];

            // Use cubic bezier curve
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
          }

          // Handle remaining points with lineTo if not divisible by 3
          const remaining = (stroke.length - 1) % 3;
          if (remaining > 0) {
            for (let i = stroke.length - remaining; i < stroke.length; i++) {
              const [x, y] = stroke[i];
              ctx.lineTo(x, y);
            }
          }
        } else {
          // Fall back to straight lines for short strokes
          for (let i = 1; i < stroke.length; i++) {
            const [x, y] = stroke[i];
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
        console.log(`Stroke ${idx} drawn`);
      });
    }

    // Draw current stroke being drawn
    if (currentStroke.length > 0) {
      ctx.beginPath();
      const [startX, startY] = currentStroke[0];
      ctx.moveTo(startX, startY);

      for (let i = 1; i < currentStroke.length; i++) {
        const [x, y] = currentStroke[i];
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  };

  // Redraw when strokes change
  useEffect(() => {
    console.log("useEffect triggered. Strokes:", strokes.length);
    if (canvasRef.current) {
      redrawCanvas();
    }
  }, [strokes, currentStroke]);

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Usage Limit Listener
  useEffect(() => {
    if (!user || !user.email) {
      setUsageCount(0);
      return;
    }

    const unsub = onSnapshot(doc(db, "pareidolia_users", user.email), (doc) => {
      if (doc.exists()) {
        setUsageCount(doc.data().generationCount || 0);
      } else {
        setUsageCount(0);
      }
    });

    return () => unsub();
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error("Login failed", e);
      alert("Login failed. Check console.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCurrentStroke([[x, y]]);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || currentStroke.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCurrentStroke(prev => [...prev, [x, y]]);
  };

  const stopDrawing = () => {
    if (currentStroke.length > 1) {
      setStrokes(prev => [...prev, currentStroke]);
    }
    setCurrentStroke([]);
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setStrokes([]);
    setCurrentStroke([]);
    setGeneratedDescription(null);
    setGeneratedImage(null);
  };

  const handleGenerate = async () => {
    if (!user) {
      handleLogin();
      return;
    }

    if (usageCount >= MAX_USAGE) {
      alert("You have reached the limit of 5 free generations.");
      return;
    }

    if (strokes.length === 0) {
      alert("Please draw something first!");
      return;
    }

    setIsGenerating(true);
    setLoadingMessage("Crafting... it may take ~30 seconds");

    try {
      // Get ID Token
      const token = await user.getIdToken();

      // Capture canvas as image
      const canvas = canvasRef.current;
      const imageBase64 = canvas ? canvas.toDataURL("image/png").split(",")[1] : "";

      // Call Server Action with strokes AND image
      const response = await generateImageAction(token, JSON.stringify(strokes), promptText.trim(), imageBase64);

      console.log("AI Response:", response);

      if (!response.success) {
        throw new Error(response.error || "Failed to generate image");
      }

      if (response.description) {
        setGeneratedDescription(response.description);
      }

      let finalStrokes: number[][][] = [];

      if (response.image) {
        const base64Img = `data:image/png;base64,${response.image}`;
        setGeneratedImage(base64Img);

        // Client-side Vectorization using ImageTracer
        console.log("Starting client-side vectorization...");
        setLoadingMessage("Computing vectors...");

        try {
          await new Promise<void>((resolve) => {
            ImageTracer.imageToSVG(
              base64Img,
              (svgStr: string) => {
                console.log("ImageTracer returned SVG string length:", svgStr.length);

                // Parse SVG using DOM
                const parser = new DOMParser();
                const doc = parser.parseFromString(svgStr, "image/svg+xml");
                const paths = doc.querySelectorAll("path");

                // Use SVG viewBox/size to map points to the canvas coordinate space
                const svgEl = doc.querySelector("svg");
                const canvasWidth = canvas?.width || 800;
                const canvasHeight = canvas?.height || 600;

                let svgWidth = 1024;
                let svgHeight = 768;
                let viewBoxX = 0;
                let viewBoxY = 0;

                if (svgEl) {
                  const viewBox = svgEl.getAttribute("viewBox");
                  if (viewBox) {
                    const [minX, minY, vbW, vbH] = viewBox.split(/\s+/).map(Number);
                    if (Number.isFinite(vbW) && Number.isFinite(vbH) && vbW > 0 && vbH > 0) {
                      viewBoxX = Number.isFinite(minX) ? minX : 0;
                      viewBoxY = Number.isFinite(minY) ? minY : 0;
                      svgWidth = vbW;
                      svgHeight = vbH;
                    }
                  }

                  if (!viewBox) {
                    const w = parseFloat(svgEl.getAttribute("width") || "0");
                    const h = parseFloat(svgEl.getAttribute("height") || "0");
                    if (w > 0) svgWidth = w;
                    if (h > 0) svgHeight = h;
                  }
                }

                const scaleX = canvasWidth / svgWidth;
                const scaleY = canvasHeight / svgHeight;

                console.log(`Scaling vectors: ${svgWidth}x${svgHeight} -> ${canvasWidth}x${canvasHeight} (sx: ${scaleX}, sy: ${scaleY})`);

                const newStrokes: number[][][] = [];

                // Parse path data manually to handle compound paths (multiple 'M' commands)
                // getPointAtLength() bridges gaps in compound paths, which creates ugly jump lines.
                paths.forEach((path) => {
                  const d = path.getAttribute('d') || "";

                  // Split by 'M' or 'm' to isolate separate strokes
                  const subPaths = d.split(/(?=[Mm])/).filter(s => s.trim().length > 0);

                  subPaths.forEach(subPathD => {
                    // Create a temporary path element for this segment to use browser math
                    const tempPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    tempPath.setAttribute("d", subPathD);

                    const len = tempPath.getTotalLength();
                    if (len < 5) return; // Ignore noise

                    const points: number[][] = [];
                    const step = 4; // Higher density for smoothness

                    for (let i = 0; i <= len; i += step) {
                      const pt = tempPath.getPointAtLength(i);
                      points.push([(pt.x - viewBoxX) * scaleX, (pt.y - viewBoxY) * scaleY]);
                    }

                    // Capture end point
                    const endPt = tempPath.getPointAtLength(len);
                    points.push([(endPt.x - viewBoxX) * scaleX, (endPt.y - viewBoxY) * scaleY]);

                    // Bounding box check for border removal
                    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                    points.forEach(([px, py]) => {
                      minX = Math.min(minX, px);
                      minY = Math.min(minY, py);
                      maxX = Math.max(maxX, px);
                      maxY = Math.max(maxY, py);
                    });

                    const w = maxX - minX;
                    const h = maxY - minY;

                    // If stroke creates a large frame near the canvas edge (780x580 or larger), skip it
                    if (w > 700 && h > 500) {
                      return;
                    }

                    if (points.length >= 2) {
                      newStrokes.push(points);
                    }
                  });
                });

                // Filter out strokes that overlap significantly with what the user already drew.
                // This prevents the "double line" messy look and improves efficiency.
                finalStrokes = newStrokes.filter(aiStroke => {
                  // Keep short details (ticks, dots) that might be inside but are distinct features
                  if (aiStroke.length < 10) return true;

                  let overlapPoints = 0;
                  // Check every 3rd point for performance
                  const stepCheck = 3;
                  const totalChecks = Math.floor(aiStroke.length / stepCheck);
                  if (totalChecks === 0) return true;

                  const threshold = 8; // Pixel distance to consider "overlapping"

                  for (let i = 0; i < aiStroke.length; i += stepCheck) {
                    const [ax, ay] = aiStroke[i];
                    let isClose = false;

                    // Check against all user strokes
                    for (const uStroke of strokes) {
                      if (!uStroke || !uStroke.length) continue;

                      for (let j = 0; j < uStroke.length; j += 2) { // Check every 2nd user point
                        const [ux, uy] = uStroke[j];
                        if (Math.abs(ux - ax) < threshold && Math.abs(uy - ay) < threshold) {
                          isClose = true;
                          break;
                        }
                      }
                      if (isClose) break;
                    }

                    if (isClose) overlapPoints++;
                  }

                  // If > 70% of the AI stroke overlaps with user strokes (stricter), discard it.
                  return (overlapPoints / totalChecks) < 0.7;
                });

                console.log(`Filtered redundant strokes. Kept ${finalStrokes.length} of ${newStrokes.length}`);
                resolve();
              },
              // ImageTracer Options for Detailed Sketchy Look
              {
                ltres: 1, // Higher tolerance removes jittery noise
                qtres: 1,
                pathomit: 32, // Ignore small noise specks (approx 32px length)
                colorsampling: 0,
                numberofcolors: 2,
                mincolorratio: 0.0,
                colorquantcycles: 1,
                scale: 1,
                strokewidth: 2,
                linefilter: true
              }
            );
          });
        } catch (traceError) {
          console.error("Vectorization failed:", traceError);
        }
      } else {
        setGeneratedImage(null);
      }

      // Handle new strokes from AI (now from local vectorizer)
      if (finalStrokes && finalStrokes.length > 0) {
        console.log("Generated strokes count:", finalStrokes.length);
        // Animate adding strokes one by one
        let index = 0;
        const addNextStroke = () => {
          if (index >= finalStrokes.length) {
            setIsGenerating(false);
            return;
          }

          setStrokes(prev => [...prev, finalStrokes[index] as Array<[number, number]>]);
          index++;
          requestAnimationFrame(() => setTimeout(addNextStroke, 50)); // Fast animation
        };

        addNextStroke();
      } else {
        setIsGenerating(false);
      }

    } catch (e: any) {
      console.error(e);
      alert(e.message || "Something went wrong generating the image.");
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground font-sans overflow-hidden">
      {/* Sidebar - Controls */}
      <aside className="w-80 flex flex-col border-r border-border bg-panel overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-blue-600"></span>
            Pareidolia
          </h1>
          <p className="text-xs text-stone-500 mt-1 font-mono">
            AI Sketch Tool
          </p>
        </div>

        {/* Tool Controls */}
        <div className="p-6 flex flex-col gap-8 flex-1">

          {/* Prompts */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-mono">Target Subject</label>
            <div className="grid grid-cols-2 gap-2">
              {PREDEFINED_PROMPTS.map(p => (
                <button
                  key={p}
                  onClick={() => setPromptText(p)}
                  className={clsx(
                    "px-3 py-2 text-xs text-left rounded-md transition-all font-mono",
                    promptText === p
                      ? "bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/20"
                      : "bg-border/50 text-stone-500 border border-transparent hover:bg-border hover:text-foreground"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button
              onClick={clearCanvas}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-foreground hover:bg-border rounded transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Canvas
            </button>

            <button
              onClick={handleGenerate}
              disabled={Boolean(isGenerating || (user && usageCount >= MAX_USAGE))}
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            >
              {!user ? (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign in to Generate</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate</span>
                </>
              )}
            </button>
          </div>

          {/* Footer Spacer */}
          <div className="mt-auto">
            {/* User Status Footer */}
            {!authLoading && user && (
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground truncate max-w-[140px]">{user.displayName}</span>
                  <span className={clsx("text-xs font-mono", usageCount >= MAX_USAGE ? "text-red-400" : "text-stone-500")}>
                    {usageCount}/{MAX_USAGE} quota used
                  </span>
                </div>
                <button onClick={handleLogout} className="p-2 hover:bg-border rounded-md transition-colors text-stone-500 hover:text-foreground" title="Sign Out">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Canvas Area */}
      <main className="flex-1 relative flex flex-col items-center justify-center bg-background p-8 overflow-hidden">
        {/* Top Status Bar */}
        <div className="absolute top-6 left-8 right-8 flex justify-between items-start pointer-events-none">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Canvas</h2>
            <p className="text-stone-500 font-mono text-xs">
              Draw your idea. The AI will render it.
            </p>
          </div>


          <div className="flex gap-4 pointer-events-auto">
          </div>
        </div>

        {/* Canvas Wrapper */}
        <div className="relative group rounded-lg border-2 border-dotted border-stone-300 dark:border-stone-700 p-2">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            className="bg-white cursor-crosshair touch-none rounded-sm"
          />

          {/* Loading Overlay */}
          {isGenerating && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-[2px] rounded-lg transition-all duration-300 ease-in-out">
              <div className="flex flex-col items-center gap-3 px-8 py-6 bg-white dark:bg-stone-900 shadow-2xl rounded-2xl ring-1 ring-black/5 dark:ring-white/10 transform transition-all scale-100 opacity-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                  <Loader2 className="relative w-8 h-8 text-blue-600 animate-spin" />
                </div>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-200 font-sans tracking-normal">
                  {loadingMessage}
                </p>
              </div>
            </div>
          )}

          {/* AI Insight Toast */}
          {generatedDescription && (
            <div className="absolute -bottom-16 left-0 right-0 text-center animate-in fade-in slide-in-from-top-4 duration-500">
              <span className="inline-block px-4 py-2 bg-panel border border-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-mono rounded-full">
                AI saw: &quot;{generatedDescription}&quot;
              </span>
            </div>
          )}
        </div>

        {/* Generated Result Overlay or Panel (Optional, sticking to canvas for now as per logic, but if image exists, show it) */}
        {generatedImage && (
          <div className="absolute top-8 right-8 w-64 bg-panel border border-border p-2 rounded shadow-xl animate-in fade-in slide-in-from-right-8 z-30">
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-[10px] font-bold uppercase text-stone-500">Result</span>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.download = `pareidolia-${Date.now()}.png`;
                  link.href = generatedImage;
                  link.click();
                }}
                className="text-stone-400 hover:text-foreground"
              >
                <Download className="w-3 h-3" />
              </button>
            </div>
            <img src={generatedImage} alt="Generated" className="w-full rounded border border-border bg-background" />
          </div>
        )}
      </main>
    </div>
  );
}

function ToolButton({ active, onClick, icon, label }: { active?: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-3 p-2 rounded-lg text-sm font-medium transition-colors",
        active
          ? "bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-100"
          : "text-stone-500 hover:bg-stone-50 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-stone-200"
      )}
      title={label}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
