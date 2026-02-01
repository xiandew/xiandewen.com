# xiandewen.com

A production-quality engineering monorepo containing multiple projects showcasing full-stack development skills. Built with Next.js 15, deployed to Cloudflare Workers and Vercel.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

**Apps running:**
- Portfolio: http://localhost:3000
- Booking Ledger: http://localhost:3001

📖 **New here?** Read [QUICKSTART.md](./QUICKSTART.md) for a 5-minute setup guide.

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 5 minutes
- **[SETUP.md](./SETUP.md)** - Detailed setup and deployment guide
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - What changed in the migration

## 🎯 Projects

### Portfolio App
**Main portfolio site showcasing all projects**
- Modern, responsive design
- Project showcase grid
- Individual project detail pages
- **Deployed to:** Cloudflare Workers
- **Live URL:** https://xiandewen-com.xiandewen1998.workers.dev

### Booking Ledger
**Customer treatment management system**
- Firebase Authentication (Google Sign-In)
- Real-time Firestore database
- Customer and treatment CRUD operations
- User authorization system
- Mobile-responsive interface
- **Deployed to:** Vercel
- **Status:** Ready for deployment (see [DEPLOYMENT.md](apps/booking-ledger/DEPLOYMENT.md))

## 🛠 Tech Stack

**Frontend:**
- Next.js 15 (App Router, SSR)
- React 19
- TypeScript
- Tailwind CSS

**Backend & Services:**
- Firebase Auth & Firestore
- Cloudflare Workers (portfolio deployment)
- Vercel (booking-ledger deployment)

**Dev Tools:**
- Turborepo (monorepo orchestration)
- pnpm (package management)
- Biome (formatting & linting)
- @opennextjs/cloudflare (portfolio deployment adapter)
- Vercel (booking-ledger hosting)

## 📁 Project Structure

```
xiandewen.com/
├── apps/
│   ├── portfolio/          # Portfolio frontend (Port 3000)
│   │   ├── src/app/        # Next.js App Router pages
│   │   ├── next.config.ts
│   │   ├── open-next.config.ts
│   │   └── wrangler.jsonc  # Cloudflare Workers config
│   │
│   └── booking-ledger/     # Booking ledger app (Port 3001)
│       ├── src/
│       │   ├── app/        # Next.js pages
│       │   ├── components/ # React components
│       │   ├── contexts/   # React contexts
│       │   └── lib/        # Utilities (Firebase, etc.)
│       ├── next.config.ts
│       ├── vercel.json     # Vercel config
│       └── DEPLOYMENT.md   # Vercel deployment guide
│
├── package.json            # Root scripts & devDependencies
├── pnpm-workspace.yaml     # Workspace configuration
├── turbo.json              # Turborepo pipeline config
├── biome.json              # Code quality config
└── README.md               # This file
```

## 🔧 Common Commands

```bash
# Development
pnpm dev              # Start all apps
pnpm build            # Build all apps

# Code Quality
pnpm format           # Format with Biome
pnpm check            # Lint with Biome

# Deployment
cd apps/portfolio && pnpm deploy      # Cloudflare Workers
cd apps/booking-ledger && vercel      # Vercel

# Clean & Rebuild
rm -rf .next .turbo node_modules && pnpm install
```

## 🌐 Deployment

### Portfolio (Cloudflare Workers)

```bash
# Login to Cloudflare (first time only)
wrangler login

# Deploy portfolio
cd apps/portfolio
pnpm deploy
```

**Live URL:** https://xiandewen-com.xiandewen1998.workers.dev

### Booking Ledger (Vercel)

```bash
# Deploy via Vercel CLI
cd apps/booking-ledger
vercel --prod
```

Or deploy via Vercel Dashboard:
1. Go to https://vercel.com/new
2. Import your repository
3. Set root directory: `apps/booking-ledger`
4. Deploy

**See [apps/booking-ledger/DEPLOYMENT.md](apps/booking-ledger/DEPLOYMENT.md) for complete Vercel setup instructions.**

## ⚙️ Configuration

### Firebase Setup (Booking Ledger)

The booking-ledger app uses Firebase for authentication and data storage. Firebase credentials are currently hardcoded but should be moved to environment variables for production.

**Firebase Project:** `xr-customer-treatments`

To configure:
1. Enable Authentication (Google provider) in Firebase Console
2. Enable Cloud Firestore
3. Set security rules
4. Add authorized users to `users` collection

## 🎨 Features

### Portfolio
- ✅ Responsive design with mobile-first approach
- ✅ Dark mode support
- ✅ Project showcase grid
- ✅ Individual project detail pages
- ✅ Fast loading with static generation
- ✅ SEO optimized

### Booking Ledger
- ✅ Google Sign-In authentication
- ✅ User authorization system
- ✅ Customer management (Create, Read, Update, Delete)
- ✅ Treatment tracking with pricing
- ✅ Soft delete for data recovery
- ✅ Real-time data synchronization
- ✅ Mobile-responsive interface
- ✅ Loading states & error handling
- ✅ User profile menu

## 📊 Performance

- Fast builds with Turborepo caching
- Optimized bundle sizes with Next.js
- Static generation where possible
- **Portfolio:** Edge deployment on Cloudflare Workers
- **Booking Ledger:** Vercel's global edge network
- Sub-second page loads

## 🏗️ Architecture Decisions

**Portfolio on Cloudflare Workers:**
- Static content with minimal runtime
- Edge-first architecture
- Cost-effective for high traffic

**Booking Ledger on Vercel:**
- Firebase SDK compatibility (doesn't work with Workers)
- Optimized for Node.js runtime
- Seamless Next.js integration
- Free tier suitable for personal projects

## 🤝 Contributing

This is a personal portfolio project, but feel free to:
- Report issues
- Suggest improvements
- Use as a template for your own projects

## 📝 License

MIT

---

**Ready to start?** Run `pnpm dev` and visit http://localhost:3000 🚀
