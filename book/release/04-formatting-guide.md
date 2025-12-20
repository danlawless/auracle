# Book Formatting Guide

## Preparing Your Manuscripts for Amazon KDP and Gumroad

---

## Overview

This guide covers formatting your markdown manuscripts for:
1. **Amazon KDP** - EPUB/MOBI for Kindle, PDF for paperback
2. **Gumroad** - PDF for direct download

---

## File Structure

### Volume 1: The Narcissism Decoder

```
vol-1-decoder/
├── 00-front-matter.md
├── chapters/
│   ├── 01-opening-manifesto.md
│   ├── 02-energetic-signature.md
│   ├── 03-narcissist-playbook.md
│   ├── 04-trauma-bonds.md
│   ├── 05-narcissist-archetypes.md
│   ├── 06-family-systems.md
│   ├── 07-manipulation-in-relationships.md
│   ├── 08-decoder-cards.md
│   ├── 09-energetic-remapping.md
│   ├── 10-practical-responses.md
│   └── 11-moving-forward.md
└── appendices/
    ├── appendix-a-content-creation.md
    └── appendix-b-childhood-patterns.md
```

### Volume 2: The Bridge

```
vol-2-bridge/
├── 00-front-matter.md
├── chapters/
│   ├── 01-opening-manifesto.md
│   ├── 02-authors-note.md
│   ├── ... (chapters 03-22)
│   └── 22-relationships-reorganized.md
└── appendices/
    ├── appendix-a-grief-process.md
    ├── appendix-b-vignettes.md
    └── appendix-c-worksheets.md
```

---

## Formatting Tools: Recommendations

Choose based on your comfort level and budget. All produce professional results.

---

### Best for Most Authors: Atticus ($147 one-time)

**Why it's recommended:**
- Modern, intuitive interface designed for self-publishers
- Works on Mac, Windows, and web browser
- Beautiful pre-made templates
- Export to EPUB, PDF, and print-ready files
- One-time purchase, no subscription
- Excellent customer support and tutorials

**Best for:** Authors who want professional results without learning technical tools.

**Get it:** [atticus.io](https://www.atticus.io)

---

### Premium Option: Vellum ($250 one-time, Mac only)

**Why it's great:**
- Industry standard for indie publishers
- Stunning output with minimal effort
- Best-in-class ebook formatting
- One-click export to all formats
- Regular updates with new features

**Best for:** Mac users willing to invest in the best tool available.

**Limitation:** Mac-only (no Windows version).

**Get it:** [vellum.pub](https://vellum.pub)

---

### Free Option: Kindle Create (Free)

**Why consider it:**
- Free, made by Amazon
- Guaranteed KDP compatibility
- Theme templates included
- Easy chapter detection

**Limitations:**
- Amazon-focused (less ideal for Gumroad PDF)
- Fewer customization options
- Less polished than paid tools

**Best for:** Budget-conscious authors publishing primarily on Amazon.

**Get it:** [Amazon Kindle Create](https://www.amazon.com/Kindle-Create)

---

### Technical/Free Options

For authors comfortable with command-line tools or who need maximum flexibility:

## Conversion Tools (Free)

### Option 1: Pandoc (Recommended for technical users)

**Install:**
```bash
# macOS
brew install pandoc

# Or download from pandoc.org
```

**Convert Markdown to EPUB:**
```bash
# Single file
pandoc input.md -o output.epub --toc --toc-depth=2

# Multiple files (Vol 1)
pandoc \
  vol-1-decoder/00-front-matter.md \
  vol-1-decoder/chapters/*.md \
  vol-1-decoder/appendices/*.md \
  -o narcissism-decoder.epub \
  --toc \
  --toc-depth=2 \
  --metadata title="The Narcissism Decoder" \
  --metadata author="Jennifer Brooke" \
  --epub-cover-image=cover.jpg
```

**Convert to PDF:**
```bash
pandoc input.md -o output.pdf --pdf-engine=wkhtmltopdf
```

### Option 2: Calibre (GUI-based, user-friendly)

1. Download from [calibre-ebook.com](https://calibre-ebook.com)
2. Import your markdown or Word document
3. Convert to EPUB, MOBI, or PDF
4. Edit metadata (title, author, description)
5. Add cover image

### Option 3: Google Docs → Word → KDP

1. Paste markdown into Google Docs
2. Format with Styles (Heading 1, Heading 2, etc.)
3. Download as .docx
4. Upload directly to KDP (they convert automatically)

### Option 4: Reedsy Book Editor (Free, online)

1. Go to [reedsy.com/write-a-book](https://reedsy.com/write-a-book)
2. Create account
3. Paste chapters
4. Export as EPUB or PDF
5. Professional formatting included

---

## Tool Comparison Summary

| Tool | Cost | Platforms | Best For |
|------|------|-----------|----------|
| **Atticus** | $147 | Mac, Windows, Web | Most authors (recommended) |
| **Vellum** | $250 | Mac only | Premium output, Mac users |
| **Kindle Create** | Free | Mac, Windows | Amazon-only publishing |
| **Pandoc** | Free | All (command line) | Technical users |
| **Calibre** | Free | All (GUI) | Format conversion |
| **Reedsy Editor** | Free | Web | Simple books, beginners |

**Jennifer's Recommendation:** Start with Atticus. The $147 investment pays for itself in time saved and professional output. If you're on Mac and want the absolute best, Vellum is worth it.

---

## Required Elements

### Front Matter (first pages)

1. **Title Page**
   - Book title
   - Subtitle
   - Author name

2. **Copyright Page**
   ```
   © [Year] [Your Name]
   All rights reserved.
   
   No part of this publication may be reproduced, distributed, or 
   transmitted in any form without the prior written permission 
   of the author.
   
   This book is not intended as a substitute for professional 
   mental health treatment. If you are in crisis, please contact 
   a mental health professional or crisis hotline.
   
   ISBN: [Your ISBN if you get one]
   
   First Edition
   ```

3. **Dedication** (optional)

4. **Table of Contents** (auto-generated by most tools)

### Back Matter (last pages)

1. **About the Author**

2. **Continue Your Journey**
   - Link to Volume 2 (in Vol 1)
   - Link to newsletter/Substack
   - Link to Gumroad for bundles

3. **Review Request**
   ```
   If this book helped you, please consider leaving a review on 
   Amazon. Reviews help other readers find this book and support 
   the author's work.
   ```

4. **Resources**
   - Crisis hotlines
   - Recommended reading
   - Your website/newsletter

---

## Cover Requirements

### Amazon KDP Ebook

- **Dimensions:** 2560 x 1600 pixels (1.6:1 ratio)
- **Format:** JPEG or TIFF
- **Resolution:** 300 DPI minimum
- **File size:** Under 50MB

### Amazon KDP Paperback

- Depends on page count and trim size
- Use KDP Cover Calculator: [kdp.amazon.com/cover-calculator](https://kdp.amazon.com/en_US/cover-calculator)
- Include spine width based on page count

### Gumroad

- **Recommended:** 1280 x 720 pixels or larger
- **Format:** JPEG, PNG, or GIF
- **Aspect ratio:** 16:9 works well

### Cover Design Options (Budget-friendly)

1. **Canva** - Free templates, easy to use
2. **Book Brush** - Free book cover templates
3. **99designs** - $299+ for custom professional cover
4. **Fiverr** - $20-100 for decent covers
5. **Reedsy Marketplace** - Professional designers

**Cover Tips:**
- Simple, readable at thumbnail size
- High contrast text
- Genre-appropriate design
- Your name clearly visible

---

## ISBN Considerations

### Do You Need One?

**For Amazon KDP:**
- Amazon provides free ASIN (their ID system)
- Free ISBN available through KDP (Amazon listed as publisher)
- Your own ISBN ($125 single, $295 for 10 from Bowker) lists you as publisher

**For Gumroad:**
- No ISBN required
- It's a direct download, not a catalogued publication

**Recommendation:** Start without purchasing ISBN. Use Amazon's free option. Buy ISBNs later if you expand distribution.

---

## Formatting Checklist

### Before Conversion

- [ ] All chapters in correct order
- [ ] Consistent heading hierarchy (# for chapters, ## for sections)
- [ ] All links working (or removed for print)
- [ ] Front matter complete
- [ ] Back matter complete with calls-to-action
- [ ] Crisis resources included
- [ ] Spelling and grammar checked

### After Conversion

- [ ] Table of contents links work
- [ ] Chapter breaks appear correctly
- [ ] Special characters display properly
- [ ] Cover image displays correctly
- [ ] Test on Kindle Previewer (free from Amazon)

---

## Upload Checklist

### Amazon KDP

1. [ ] Log in to kdp.amazon.com
2. [ ] Click "Create New Title" → "Kindle eBook"
3. [ ] Enter book details:
   - [ ] Title and subtitle
   - [ ] Author name
   - [ ] Description (from `03-book-descriptions.md`)
   - [ ] Keywords (7 maximum)
   - [ ] Categories (2)
4. [ ] Upload manuscript file
5. [ ] Upload cover
6. [ ] Preview in Kindle Previewer
7. [ ] Set pricing:
   - [ ] Ebook: $4.99-$6.99 (70% royalty)
   - [ ] Territory: All territories
8. [ ] Publish (takes 24-72 hours to go live)

### Gumroad

1. [ ] Log in to gumroad.com
2. [ ] Click "New Product"
3. [ ] Product type: Digital product
4. [ ] Upload PDF file
5. [ ] Add cover image
6. [ ] Write description
7. [ ] Set price
8. [ ] Enable email collection
9. [ ] Set custom URL
10. [ ] Publish

---

## Quality Assurance

### Test Your Ebook

1. **Kindle Previewer** (free)
   - Download from Amazon
   - Open your EPUB/MOBI
   - Check on different device simulations

2. **Send to Kindle App**
   - Email file to your Kindle email address
   - Test on actual device

3. **Calibre Viewer**
   - Open in Calibre
   - Check formatting

### Common Issues to Check

- [ ] Images display correctly
- [ ] Tables are readable
- [ ] Blockquotes formatted properly
- [ ] No orphaned headers (heading at bottom of page)
- [ ] Links are clickable
- [ ] Font size readable

---

## Recommended Workflow

### Week 1: Prepare Files

1. Combine all chapter files in order
2. Add front matter and back matter
3. Proofread entire manuscript
4. Design or commission cover

### Week 2: Convert and Test

1. Convert to EPUB using Pandoc or Calibre
2. Test in Kindle Previewer
3. Make corrections
4. Convert to PDF for Gumroad
5. Test PDF on different devices

### Week 3: Upload and Publish

1. Upload to Amazon KDP
2. Preview and approve
3. Upload to Gumroad
4. Test purchase flow on Gumroad
5. Set up Decoder Cards as free lead magnet

---

## Quick Commands Reference

### Combine Markdown Files (macOS/Linux)

```bash
# Volume 1
cat vol-1-decoder/00-front-matter.md \
    vol-1-decoder/chapters/*.md \
    vol-1-decoder/appendices/*.md \
    > narcissism-decoder-complete.md

# Volume 2
cat vol-2-bridge/00-front-matter.md \
    vol-2-bridge/chapters/*.md \
    vol-2-bridge/appendices/*.md \
    > the-bridge-complete.md
```

### Convert with Pandoc

```bash
# To EPUB
pandoc narcissism-decoder-complete.md \
  -o narcissism-decoder.epub \
  --toc \
  --metadata title="The Narcissism Decoder" \
  --metadata subtitle="Control Disguised as Care" \
  --metadata author="Jennifer Brooke" \
  --epub-cover-image=cover-vol1.jpg

# To PDF
pandoc narcissism-decoder-complete.md \
  -o narcissism-decoder.pdf \
  --pdf-engine=wkhtmltopdf \
  --metadata title="The Narcissism Decoder"
```

---

## Next Steps

After formatting and uploading:
1. → Request reviews from friends/family (see launch sequence)
2. → Create content calendar (see `05-content-calendar.md`)
3. → Begin pre-launch content on social media

