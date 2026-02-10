# 📝 Website Update Guide - Easy Tasks You Can Do Yourself

## 🛒 1. Change Product Prices

**File:** `data/shop.json`

**How to do it:**
1. Open `data/shop.json` in TextEdit (or VS Code)
2. Find the product:
```json
{
  "id": "sample-item-1",
  "title": "Drill Dust Collector",
  "price": "N$ 35"    ← Change this number
}
```
3. Change the price: `"price": "N$ 40"`
4. Save file
5. Re-upload to Netlify

**⏱️ Time:** 2 minutes

---

## 📦 2. Add New Product to Shop

**Files needed:**
- `data/shop.json`
- Product images in `images/products/`

**Steps:**

### A) Prepare images:
1. Create folder: `images/products/new-product-name/`
2. Add 3 images: `image1.jpg`, `image2.jpg`, `image3.jpg`

### B) Add to shop.json:
```json
{
  "id": "new-product-name",
  "title": "Your Product Name",
  "price": "N$ 50",
  "images": [
    "/images/products/new-product-name/image1.jpg",
    "/images/products/new-product-name/image2.jpg",
    "/images/products/new-product-name/image3.jpg"
  ],
  "description": "Your funny product description here",
  "whatsapp": "Your Product Name"
}
```

3. Add comma after previous product
4. Paste this at the end before closing `]`
5. Save file
6. Re-upload to Netlify

**⏱️ Time:** 10 minutes

---

## 📞 3. Update Contact Information

**File:** `index.html`

**How to do it:**

1. Open `index.html` in TextEdit
2. Press `Cmd+F` to search
3. Search for your old phone number or email
4. Replace with new information
5. Save file
6. Re-upload to Netlify

**Common things to update:**
- Phone: `+264 83 675 0117`
- Email: `info@scanform3dp.com`
- Address: `Windhoek, Namibia`

**⏱️ Time:** 5 minutes

---

## 🖼️ 4. Add Photos to Gallery

**Files needed:**
- `data/gallery.json`
- Photos in `images/gallery/`

**Steps:**

1. Add your photos to `images/gallery/` folder
   - Name them: `photo-name-1.jpg`, `photo-name-2.jpg`

2. Open `data/gallery.json`

3. Add new item:
```json
{
  "id": "photo-name",
  "title": "Photo Title",
  "images": [
    "/images/gallery/photo-name-1.jpg",
    "/images/gallery/photo-name-2.jpg"
  ],
  "description": "Description of the photo"
}
```

4. Save and re-upload

**⏱️ Time:** 5 minutes

---

## 🎨 5. Change Website Colors

**File:** `style.css`

**Current color scheme:**
- Primary turquoise: `#36c1b3`
- Dark turquoise: `#2a9a8e`

**How to change:**

1. Open `style.css`
2. Press `Cmd+F` and search: `#36c1b3`
3. Replace all with your new color (e.g., `#0066ff` for blue)
4. Search `#2a9a8e` and replace with darker version
5. Save and re-upload

**Need color codes?** Visit: https://htmlcolorcodes.com

**⏱️ Time:** 5 minutes

---

## 📧 6. Change Email Address Throughout Site

**File:** `index.html`

**Steps:**
1. Open `index.html`
2. Press `Cmd+F`
3. Search: `info@scanform3dp.com`
4. Click "Replace All"
5. Enter your new email
6. Save and re-upload

**⏱️ Time:** 2 minutes

---

## 🔄 How to Re-Upload to Netlify:

### Method 1: Drag & Drop
1. Go to: https://app.netlify.com
2. Login
3. Click on your site
4. Click "Deploys" tab
5. Drag your updated `Scanform3dP_Export` folder
6. Wait 30 seconds - Done!

### Method 2: GitHub (if set up)
1. Update files on your computer
2. Open GitHub Desktop
3. Write description of changes
4. Click "Commit to main"
5. Click "Push origin"
6. Netlify auto-updates in 1 minute!

---

## ⚠️ Common Mistakes to Avoid:

### ❌ DON'T:
- Delete files you don't understand
- Remove commas in JSON files
- Edit files while viewing on phone (use computer)
- Upload only one file (upload whole folder)

### ✅ DO:
- Make backup before changing
- Test locally first (open index.html in browser)
- Keep image sizes reasonable (< 500KB each)
- Use descriptive file names (no spaces)

---

## 🆘 When to Ask for Help:

**You can handle:** Prices, products, text, images, colors
**Get help for:** Broken features, new functionality, layout changes

---

## 📚 Learning Resources:

**Want to learn more?**
- HTML Basics: https://www.w3schools.com/html/
- CSS Basics: https://www.w3schools.com/css/
- JSON Format: https://www.w3schools.com/js/js_json_intro.asp

**Tools to make editing easier:**
- **VS Code** (free code editor): https://code.visualstudio.com
- **GitHub Desktop** (if using GitHub): https://desktop.github.com

---

## 💡 Quick Reference Cheat Sheet:

| I want to... | Edit this file | Difficulty |
|--------------|----------------|------------|
| Change prices | `data/shop.json` | 🟢 Easy |
| Add product | `data/shop.json` + images | 🟢 Easy |
| Change phone/email | `index.html` | 🟢 Easy |
| Add gallery photo | `data/gallery.json` + images | 🟢 Easy |
| Change colors | `style.css` | 🟡 Medium |
| Change logo | `images/branding/logo.png` | 🟢 Easy |
| Update scanning info | `index.html` (scanning section) | 🟢 Easy |

---

**Remember:** Always make a backup copy before editing!

**Pro Tip:** Open `index.html` in your browser (double-click) to preview changes before uploading to Netlify.

---

Good luck! Most updates are easier than you think! 🚀
