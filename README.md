# Nidarsana P — Portfolio

A responsive personal portfolio built with React and Vite. It uses the supplied portrait and signature, and includes the previously shared resume PDF as a viewable/downloadable file.

## Run locally

1. Install Node.js (LTS).
2. Extract this project folder.
3. Open a terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy the project to Vercel or Netlify using the Vite preset.

## Before publishing

- Review the wording and status of each project so it accurately reflects your contribution.
- The phone number is intentionally not displayed; the email address is the public contact method.
- The resume currently included is the PDF previously shared in ChatGPT. Replace `public/Nidarsana-Resume.pdf` if you update it.
- Check that the email, GitHub and LinkedIn links are correct.
- Project descriptions are written conservatively; update technologies or links where you have a public repository or live demo.

## Project structure

- `src/main.jsx` — page content and React components
- `src/style.css` — responsive styling
- `src/assets/profile.png` — supplied portrait
- `src/assets/signature.jpg` — supplied signature
- `public/Nidarsana-Resume.pdf` — previously shared resume
