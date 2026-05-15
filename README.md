# Aura Spatial

A premium spatial awareness and furniture marketplace application.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS (via CDN in some pages, custom CSS in others)
- **Deployment:** Optimized for modern CI/CD environments (Vite-based)

## Recent Updates

- **Marketplace Refinement:** Updated image assets for luxury furniture pieces (Sloan Sofa, Hana Chair, Malmo Table, etc.).
- **Visual Improvements:** Enhanced CSS for a premium, minimalist e-commerce aesthetic.
- **Navigation:** Streamlined header and navigation links for better UX.

## Deployment Notes

If you encounter `npm error code EUSAGE` during deployment (specifically `npm clean-install` / `npm ci`), ensure that:
1. `package-lock.json` is present in your repository.
2. The `package.json` and `package-lock.json` are in sync.
3. If the error persists, try deleting `package-lock.json` from your local machine, running `npm install`, and committing the fresh lockfile.
4. If using Cloudflare Pages, verify the build command is `npm run build` and the root directory is set correctly.

## Syncing with GitHub

To sync this project with your GitHub repository:
1. Open the **Settings** or **Deploy** menu in the sidebar.
2. Select **Export to GitHub** or **Sync**.
3. Follow the authentication prompts to link your repository.
