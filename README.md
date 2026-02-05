# Mechly Website

Lightweight landing page for Mechly - an AI-powered DFM copilot for Fusion 360.

## Local Development

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deployment

1. Push to GitHub
2. Connect to Netlify
3. Deploy (no build step needed)

## OG Image

Convert the SVG to PNG for social sharing:

```bash
# Using ImageMagick
convert -size 1200x630 images/og-image.svg images/og-image.png

# Or use an online converter
# Upload images/og-image.svg to cloudconvert.com or similar
```

The OG image should be 1200x630 pixels for optimal display on social platforms.
