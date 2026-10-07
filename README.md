# Salti Burger

Arabic, RTL, responsive static restaurant website. No build or runtime dependencies.

## Run locally

From `/workspace/Salti.burgerr`:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

The page uses local assets and vanilla CSS/JavaScript. Mobile navigation, FAQ accordions, address copying (with a readable fallback), reduced-motion support, and links to the restaurant's supplied social/location pages are included.

## Publication

Push to `main`, then select **GitHub Actions** under repository **Settings → Pages**. The included workflow publishes only the website files. Deployment is successful only when the Pages workflow succeeds and the published URL responds.

## Content awaiting verification

The supplied Drive folder redirects to Google sign-in and requires public sharing or uploaded images. The burger artwork is an original SVG illustration, explicitly labeled on the site, not a restaurant photo. Replace it and adjust the palette after obtaining the restaurant photos. No unverified prices, menu items, opening hours, phone numbers, delivery service, customer reviews, or ratings are advertised. The restaurant's social pages provide the menu information. Map artwork is illustrative; the destination is the supplied Maps link. Verify external links before commercial handover. No ordering/payment backend is implemented.
