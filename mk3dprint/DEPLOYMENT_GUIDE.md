# 🚀 MK 3D Printing Website - Netlify Deployment Guide

## ✅ Your Website is Ready to Deploy!

This folder contains your complete website, ready to be hosted on Netlify for **FREE**.

---

## 📋 What You Need:

1. A **Netlify account** (free) - Sign up at https://netlify.com
2. Optional: A **custom domain** (e.g., mk3dprinting.com) - Buy from Namecheap, GoDaddy, etc.

---

## 🎯 Step-by-Step Deployment:

### **Method 1: Drag & Drop (Easiest - 2 minutes)**

1. **Go to Netlify:**
   - Visit: https://app.netlify.com/drop
   - (You'll be asked to create a free account if you don't have one)

2. **Drag Your Folder:**
   - Open Finder and locate this folder: `Scanform3dP_Export`
   - Drag the **ENTIRE FOLDER** onto the Netlify Drop zone
   - Wait 30 seconds for upload

3. **Done! Your site is live!**
   - You'll get a URL like: `random-name-123.netlify.app`
   - Click the URL to view your live website

4. **Customize Your URL (Optional):**
   - In Netlify dashboard, click "Site settings"
   - Click "Change site name"
   - Choose something like: `mk3dprinting`
   - Your URL becomes: `mk3dprinting.netlify.app`

---

### **Method 2: GitHub + Netlify (Recommended for updates)**

If you want to easily update your website later:

1. **Create GitHub Account:**
   - Sign up at: https://github.com

2. **Create New Repository:**
   - Click "New" → Name it "mk-3d-printing-website"
   - Make it Public
   - Don't add README

3. **Upload Your Files:**
   - Click "uploading an existing file"
   - Select ALL files from this folder
   - Commit changes

4. **Connect to Netlify:**
   - Go to: https://app.netlify.com
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

5. **Auto-Updates:**
   - Now whenever you update GitHub, Netlify automatically updates your site!

---

## 🌐 Connect Your Custom Domain:

### **After buying a domain (e.g., from Namecheap):**

1. **In Netlify:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain: `mk3dprinting.com`

2. **In Your Domain Registrar (Namecheap, etc.):**
   - Find "DNS Settings" or "Nameservers"
   - Add these Netlify DNS records:
     ```
     Type: A Record
     Host: @
     Value: 75.2.60.5

     Type: CNAME
     Host: www
     Value: your-site.netlify.app
     ```
   - Or use Netlify DNS (easier - Netlify will give you nameservers)

3. **Wait 24 Hours:**
   - DNS changes take time to propagate
   - Your site will be live at your custom domain!

---

## 💰 Cost Breakdown:

| Item | Cost |
|------|------|
| Netlify Hosting | **FREE** ✅ |
| Custom Domain (optional) | ~N$150-220/year |
| SSL Certificate | **FREE** (Netlify includes) ✅ |
| Bandwidth | **FREE** (100GB/month) ✅ |

**Total: FREE** (or ~N$150/year with custom domain)

Compare to Namhost: N$1,020/year - **You save N$870/year!**

---

## 📧 Contact Details Update:

**IMPORTANT:** Before deploying, update your contact email in `index.html`:

Currently using: `info@scanform3dp.com`

Search for "info@scanform3dp.com" in index.html and replace with your real email.

---

## 🔧 Need Help?

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com
- **YouTube Tutorial:** Search "Deploy website to Netlify"

---

## 📁 File Structure:

```
Scanform3dP_Export/
├── index.html          # Main homepage
├── search.html         # 3D print search page
├── style.css           # All website styling
├── images/            # All images (logo, products, gallery)
├── js/                # JavaScript files
│   ├── lightbox.js
│   ├── render.js
│   └── search.js
└── data/              # Product/gallery data
    ├── shop.json
    ├── gallery.json
    ├── scanning.json
    └── imports.json
```

---

## ✨ Features Included:

- ✅ Fully responsive (mobile-friendly)
- ✅ Shop with WhatsApp ordering
- ✅ 3D Scanning section
- ✅ Product Imports section
- ✅ Image lightbox galleries
- ✅ 3D print search functionality
- ✅ Contact form ready
- ✅ SEO-friendly HTML

---

## 🚀 Ready to Go Live!

Your website is 100% ready for deployment. Just follow Method 1 above and you'll be live in 2 minutes!

Good luck with your business! 🎉
