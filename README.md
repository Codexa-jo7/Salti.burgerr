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

39 entries and supplied menu prices. Product visuals are AI-enhanced recreations of supplied burger images and AI-generated illustrations for sandwiches, sides and sauces, with per-image captions removed at the owner’s request. Optimized WebP sheets are under assets/enhanced; SVG windows display individual products. Original source scans remain archived in assets/menu but the original-menu gallery and its dialog have been removed at the owner's request. No ordering/payment backend is implemented.

Validated 1440, 768, 390 and 320px layouts, navigation and Escape, FAQ, clipboard, category/search filters, empty state, prices, images for all 39 entries, and absence of the original-menu section. All four new image assets load without errors.

Social cards intentionally contain no food imagery. Sandwich visuals use soft elongated sesame rolls. Product image sheets use white margins to isolate each product.
