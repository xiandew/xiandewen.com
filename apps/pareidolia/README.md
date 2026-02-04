# Pareidolia

**Turn rough sketches into refined art.**

Pareidolia is a drawing app that uses AI to transform your simple doodles into complete, meaningful images.

## Why "Pareidolia"?

The name comes from a psychological phenomenon where humans see meaningful shapes (like faces or animals) in random visual patterns—like seeing a face in the clouds. This app does the same thing: it looks at your rough strokes and "imagines" a finished picture from them.

## Tech Stack

This project works as a demonstration of modern **Edge + AI** architecture.

### Frontend & Edge
- **Next.js 15**: React framework for the user interface.
- **Cloudflare Workers**: The app is deployed to the edge using `opennextjs-cloudflare` for global low-latency performance.
- **Tailwind CSS**: For clean, responsive styling.
- **HTML5 Canvas**: For the drawing interface.

### AI & Cloud
- **AWS Bedrock**: We use AWS's managed AI service to run **Amazon Titan Image Generator v2**, one of the most cost-effective and capable models available.
    - We use the **Conditioning (Canny Edge)** mode to strictly follow user strokes.
    - This model costs ~$0.01 per image, making it significantly cheaper than Stable Diffusion alternatives.
    - Model ID: `amazon.titan-image-generator-v2:0`

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

This app is designed to be **server-less**. It runs almost entirely on Cloudflare's global network, handing off heavy compute tasks (AI generation) to AWS only when needed. This keeps the app extremely fast and cost-effective.
