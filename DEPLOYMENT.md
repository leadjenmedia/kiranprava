# Deployment Guide for Hostinger hPanel

## Build Instructions

This project is configured for **static export** which works with Hostinger's static hosting.

### Step 1: Build the Project

```bash
npm run build
```

This will create an `out` folder with all static files ready for upload.

### Step 2: Upload to Hostinger

1. **Login to Hostinger hPanel**
2. **Go to File Manager** or use **FTP**
3. **Navigate to `public_html`** (or your domain's root folder)
4. **Upload all contents** from the `out` folder:
   - Select all files and folders inside `out`
   - Upload them to `public_html`

### Step 3: Verify

- Visit your domain
- All pages should work correctly
- Check mobile responsiveness

## Important Notes

- **Static Export**: This build creates static HTML/CSS/JS files
- **Images**: Images are unoptimized for static export compatibility
- **No Server Features**: API routes won't work with static export
- **All Pages**: All pages are pre-rendered as static HTML

## Alternative: Node.js Hosting (If Available)

If your Hostinger plan supports Node.js hosting:

1. Remove `output: 'export'` from `next.config.mjs`
2. Set `images: { unoptimized: false }` back
3. Build with `npm run build`
4. Upload:
   - `.next` folder
   - `node_modules` folder
   - `package.json`
   - `public` folder
   - `next.config.mjs`
   - `tsconfig.json`
5. Set Node.js version in hPanel
6. Run `npm install --production`
7. Start with `npm start` or configure PM2

## File Structure After Build

```
out/
├── _next/
│   ├── static/
│   └── ...
├── products/
│   ├── cij/
│   ├── tij-tto/
│   ├── packaging/
│   └── ink-solvents/
├── contact/
├── technology/
├── success-stories/
├── support/
├── partnership/
├── careers/
├── index.html
└── ...
```

Upload everything inside `out/` to your `public_html/` folder.
