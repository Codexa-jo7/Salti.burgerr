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

The red/white/black design and 35 menu entries were transcribed from the restaurant menu images supplied in chat. Prices are in JOD, with burger/double/meal/double-meal options where shown. Category filtering and search work locally without a backend. Confirm current prices and allergen information with the restaurant.

The attached images are visible in the conversation but their original file bytes were not delivered to this cloud workspace (only Windows E: paths were supplied). The Drive folder still requires sign-in. Original food photos therefore await a downloadable ZIP/upload; the site currently uses typography instead of the old burger illustration. No opening hours, phone numbers, customer reviews, or ordering/payment service are fabricated.

Validated at 1440, 768, 390 and 320px: layout without horizontal overflow, navigation, Escape, FAQ, clipboard, all 35 menu items, category/search filtering, empty state, and sample menu prices.
