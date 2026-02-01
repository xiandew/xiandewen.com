# Booking Ledger

Customer treatment management system built with Next.js and Firebase.

## Features

- Customer management
- Treatment tracking
- Firebase authentication with Google Sign-In
- Real-time data sync with Firestore
- Responsive design with Tailwind CSS
- **Dual deployment support**: Production + Public Demo

## Deployments

This application supports two separate deployments:

- **Production**: Full access with user authorization
- **Demo**: Public access with single-record limitation

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete setup instructions.

## Development

```bash
# Install dependencies (from monorepo root)
pnpm install

# Run development server
pnpm dev

# The app runs on http://localhost:3001
```

### Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.local.template .env.local
   ```

2. Fill in your Firebase configuration values (see DEPLOYMENT.md for details)

3. Set demo mode flag:
   - `NEXT_PUBLIC_DEMO_MODE=false` for production testing
   - `NEXT_PUBLIC_DEMO_MODE=true` for demo mode testing

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth (Google)
- **Styling**: Tailwind CSS
- **Runtime**: Node.js
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx     # Home page
│   ├── login/       # Login page
│   ├── new/         # Create new record
│   ├── edit/        # Edit existing record
│   └── view/        # View record details
├── components/       # React components
├── contexts/         # React contexts
└── lib/
    └── firebase.ts  # Firebase configuration and helpers
```

## Architecture Notes

- Environment-based configuration for multi-deployment support
- Complete data isolation between production and demo
- Demo mode enforces single-record limitation per user
- Soft delete pattern for data retention
