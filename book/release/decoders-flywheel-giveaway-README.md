# Decoders Flywheel PDF Giveaway

## About This File

`decoders-flywheel-giveaway.html` is a professionally designed, print-ready HTML document containing the 12 Decoder Cards lead magnet for social media marketing.

## Features

- Professional dark/gold color scheme
- Cover page with branding
- 12 decoder cards with consistent formatting
- The 3-3-3 Rule section
- Emergency Protocol guide
- CTA page promoting the full book series
- Print-optimized CSS

## Converting to PDF

### Option 1: Browser Print (Easiest)

1. Open `decoders-flywheel-giveaway.html` in Chrome or Edge
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF" as the destination
4. Set margins to "None" or "Minimum"
5. Enable "Background graphics"
6. Click "Save"

### Option 2: Command Line (wkhtmltopdf)

```bash
# Install wkhtmltopdf first
# macOS: brew install wkhtmltopdf
# Ubuntu: sudo apt-get install wkhtmltopdf

wkhtmltopdf --enable-local-file-access \
  --print-media-type \
  --page-size Letter \
  --margin-top 0 \
  --margin-right 0 \
  --margin-bottom 0 \
  --margin-left 0 \
  decoders-flywheel-giveaway.html decoders-flywheel-giveaway.pdf
```

### Option 3: Puppeteer/Playwright (Node.js)

```javascript
const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/decoders-flywheel-giveaway.html`);
  await page.pdf({
    path: 'decoders-flywheel-giveaway.pdf',
    format: 'Letter',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  await browser.close();
}
generatePDF();
```

## Customization

### Update CTAs

Search for these placeholders in the HTML and replace with your actual links:

- `href="#"` on the CTA button → Your Gumroad/Amazon link
- Author bio section → Your bio
- Newsletter link → Your Substack URL

### Update Branding

The color scheme is defined in CSS variables at the top:

```css
:root {
    --gold: #C9A962;         /* Primary accent */
    --gold-light: #E5D4A1;   /* Secondary accent */
    --dark: #1A1A2E;         /* Primary background */
    --dark-blue: #16213E;    /* Secondary background */
}
```

### Fonts

The document uses:
- **Playfair Display** - Headers and titles
- **Inter** - Body text

These are loaded from Google Fonts. For offline use, download and embed the fonts locally.

## Social Media Usage

### For Gumroad

1. Convert to PDF
2. Upload to Gumroad as a free product
3. Enable "Pay what you want" with $0 minimum
4. Require email for download

### For Instagram/TikTok

1. Screenshot individual cards from the HTML
2. Use as carousel posts
3. Link to full PDF download in bio

### For Email Marketing

1. Offer PDF as welcome gift for newsletter signup
2. Include in automated welcome sequence
3. Reference in social media CTAs

## File Structure

```
book/release/
├── decoders-flywheel-giveaway.html    # Main design file
├── decoders-flywheel-giveaway-README.md  # This file
└── 02-decoder-cards-lead-magnet.md    # Original content source
```

## The Decoders Flywheel Strategy

This PDF is the entry point of the growth flywheel:

```
FREE (This PDF)          PAID                    FUTURE
┌─────────────┐     ┌─────────────┐        ┌─────────────┐
│  12 Decoder │     │  Vol 1-4    │        │  Coaching   │
│   Cards     │ ──▶ │  Books      │ ──────▶│  Courses    │
│  (Email)    │     │  Bundles    │        │  Community  │
└─────────────┘     └─────────────┘        └─────────────┘
```

Every download captures an email. Every email builds the audience for book launches. Every book reader becomes a candidate for higher-ticket offerings.
