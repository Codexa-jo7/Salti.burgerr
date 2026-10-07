# Salti Burger

Arabic, RTL, responsive static restaurant website. No build or runtime dependencies.

## Run locally

From `/workspace/Salti.burgerr`:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

The page uses local assets and vanilla CSS/JavaScript. Mobile navigation, FAQ accordions, address copying (with a readable fallback), reduced-motion support, and links to the restaurant's supplied social/location pages are included.

## Publication

GitHub Pages is configured to deploy from the `main` branch at `/`. Push changes to `main` to publish. `.nojekyll` serves the static website directly. No custom domain or paid domain is required. The optional manual Actions workflow requires switching Pages to GitHub Actions before use. Deployment is successful only when the Pages build succeeds and the published URL responds.

## Menu and imagery

39 entries and prices transcribed from six original restaurant menu pages supplied by the owner. Ten Drive links were downloaded successfully; four were byte-identical duplicates. Original WebP files are retained under assets/menu. SVG display windows isolate food photographs without altering source files, hiding surrounding text and borders in product cards. A keyboard-accessible dialog displays each full original menu page. Confirm current prices and allergen details with the restaurant. No ordering/payment backend is implemented.

Validated desktop and mobile layouts (1440, 768, 390, 320px), navigation and Escape, FAQ, clipboard, category/search filters, empty state, menu prices, all six full-resolution images and the dialog.
