# Customer Treatments Management

This is a small React + Tailwind project scaffolded for GitHub Pages deployment that stores customer treatment records in Firebase (Firestore).

What it includes
- Vite + React
- Tailwind CSS
- Firebase (Firestore) helper (fill in your config)
- A form with repeating treatment rows and a table with edit capability

Quick start
1. Fill Firebase config in `src/firebase.js` (replace the placeholder values). Enable Firestore in your Firebase project.
2. Install dependencies:

```bash
# in repo root
npm install
```

3. Run dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Deploy to GitHub Pages (set `homepage` in package.json or edit the `deploy` script as needed):

```bash
npm run deploy
```

Notes
- The firebase config is intentionally left with placeholders. Do not commit real secrets; use GitHub repository secrets or environment variables when appropriate.
- The project uses Firestore. The helper functions are in `src/firebase.js`.

Next steps (optional):
- Add authentication
- Improve validation and UX (confirmation dialogs, toasts)
- Add sorting/pagination
