# Pareidolia

**Turn rough sketches into refined art.**

Pareidolia is a drawing app that uses AI to transform your simple doodles into complete, meaningful images.

## Why "Pareidolia"?

The name comes from a psychological phenomenon where humans see meaningful shapes (like faces or animals) in random visual patterns—like seeing a face in the clouds. This app does the same thing: it looks at your rough strokes and "imagines" a finished picture from them.

## Tech Stack

This project works as a demonstration of modern **AI-Native** architecture.

### Frontend
- **Next.js 16**: React framework for the user interface.
- **Vercel**: Deployed as serverless functions.
- **Tailwind CSS**: For clean, responsive styling.
- **HTML5 Canvas**: For the drawing interface.

### AI & Backend
- **Google Gemini**: We use **Gemini 2.5 Flash Image** to interpret vector strokes and generate detailed imagery.
- **Firebase**: Handles authentication and usage limits.

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run local development:
   ```bash
   pnpm dev
   ```

## Architecture Note

This app is designed to be **server-less**. It runs on Vercel, handling user sessions via Firebase and handing off creative tasks to Gemini.
