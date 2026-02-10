# MK3DPRINT Website Modernization - UAT Test Plan

**Project:** Thingiverse Integration & Shop Removal
**Environment:** Staging (`staging/thingiverse-integration`)
**Date:** February 10, 2026
**Tester:** QA/Testing Team
**Duration:** 1-2 days

---

## Executive Summary

This document provides comprehensive UAT testing procedures for the modernized MK3DPRINT website. The site has been updated with:
- ✅ Shop section removed
- ✅ Thingiverse trending designs widget added
- ✅ Search functionality integrated
- ✅ Responsive design across all devices

**Goal:** Verify functionality, performance, and user experience before production deployment.

---

## Pre-Test Setup

### 1. Access Staging Environment

**Option A: Netlify Staging URL**
```
https://staging-mk3dprint.netlify.app/
(Or your configured staging URL)
```

**Option B: Local Testing**
```bash
cd /Users/mornekarg/MK3DPRINT/mk3dprint-dev
python3 -m http.server 8000
# Open http://localhost:8000
```

### 2. Test Devices/Browsers

| Device | Browser | Resolution | Testing Status |
|--------|---------|-----------|---|
| Desktop | Chrome | 1920x1080 | [ ] |
| Desktop | Firefox | 1920x1080 | [ ] |
| Desktop | Safari | 1920x1080 | [ ] |
| Tablet | Chrome | 768x1024 | [ ] |
| Tablet | Safari | 768x1024 | [ ] |
| Mobile | Chrome | 375x812 | [ ] |
| Mobile | Safari (iOS) | 375x812 | [ ] |

### 3. Test Environment Checklist

- [ ] Internet connection stable and fast
- [ ] Browser cache cleared (or incognito/private mode)
- [ ] DevTools open for error monitoring
- [ ] Lighthouse extension installed (Chrome)
- [ ] Screenshot tool available for documentation

---

## Test Sections

### SECTION A: Navigation & Layout

**Test A1: Navigation Bar**
- [ ] Navigation loads correctly
- [ ] All navigation links present: Home, Services, Gallery, Scanning, Imports, About, Quote, Contact
- [ ] Shop link is **NOT** present (removed)
- [ ] Logo links to homepage
- [ ] Responsive menu on mobile (hamburger icon if applicable)
- [ ] No broken links

**Test A2: Page Sections**
- [ ] Hero section displays correctly
- [ ] Services section visible with all cards
- [ ] **Browse 3D Models** section present with trending widget
- [ ] Scanning section displays
- [ ] Gallery section displays
- [ ] Imports section displays
- [ ] About section displays
- [ ] Quote section displays
- [ ] Footer displays with contact info
- [ ] All sections render without layout issues

---

### SECTION B: Trending Designs Widget

**Test B1: Widget Loading**
- [ ] Widget appears in "Browse 3D Models" section
- [ ] Widget header shows: "🔥 Trending Designs This Week"
- [ ] Refresh button visible and clickable
- [ ] Search input visible and functional
- [ ] Grid container visible

**Test B2: Designs Display**
- [ ] 20 trending designs load successfully
- [ ] Each design card displays:
  - [ ] Design thumbnail image
  - [ ] Design title
  - [ ] Creator name
  - [ ] Download count (⬇)
  - [ ] Star rating (⭐)
  - [ ] Brief description (truncated)
  - [ ] "Get Quote ✓" button
  - [ ] "More Details" button
- [ ] Images load without errors
- [ ] No broken/missing images (placeholder should show if needed)
- [ ] Layout is clean and well-organized

**Test B3: Loading State**
- [ ] Loading spinner appears while fetching designs
- [ ] "Loading..." message displays
- [ ] Spinner animates smoothly
- [ ] Widget becomes interactive once loaded

**Test B4: Error Handling**
- [ ] If API unavailable: Error message displays clearly
- [ ] Retry button appears
- [ ] Fallback to cached designs (if previously loaded)
- [ ] No console errors

**Test B5: Image Hover Effects (Desktop)**
- [ ] Image zooms slightly on card hover (scale 1.05)
- [ ] Dark overlay appears over image
- [ ] "View on Thingiverse" button appears in center
- [ ] Button is clickable and highlighted
- [ ] Effect is smooth (0.25s transition)

**Test B6: Card Hover Effects (Desktop)**
- [ ] Card lifts up on hover (translateY -8px)
- [ ] Shadow increases (more prominent)
- [ ] Buttons become more visible
- [ ] Effect is smooth and responsive

---

### SECTION C: Search Functionality

**Test C1: Search Input**
- [ ] Search input field is visible
- [ ] User can type in search field
- [ ] Placeholder text helpful ("Search for designs...")
- [ ] Input accepts various characters

**Test C2: Search Button**
- [ ] Search button visible and clickable
- [ ] Button text or icon clearly indicates search function
- [ ] Button is accessible

**Test C3: Search Actions**
- [ ] User types: "phone holder"
- [ ] Clicks search button
- [ ] **Thingiverse search opens in new tab** with query
- [ ] URL format: `https://www.thingiverse.com/search?q=phone+holder`
- [ ] Results display on Thingiverse

**Test C4: Search Edge Cases**
- [ ] Empty search: Handles gracefully (error or hint)
- [ ] Special characters: "@#$%^&*" - handles without breaking
- [ ] Long input: "a very very very long search query..." - truncates or handles
- [ ] Numbers: "3d printer" works
- [ ] Unicode: "café" works (if supported)

**Test C5: Search Input Validation**
- [ ] Input is sanitized (no XSS injection)
- [ ] No HTML injection possible
- [ ] Script tags don't execute
- [ ] Special characters escaped properly

---

### SECTION D: Quote Integration

**Test D1: Get Quote Button**
- [ ] "Get Quote ✓" button visible on each design card
- [ ] Button is clickable
- [ ] Button is accessible (keyboard navigation works)
- [ ] Button text is clear

**Test D2: Quote Form Pre-fill**
- [ ] Clicking "Get Quote" scrolls page to quote form
- [ ] Scroll is smooth (not instant jump)
- [ ] Quote form visible after scroll
- [ ] Form is pre-filled with design information:
  - [ ] Design Title: Matches selected design
  - [ ] Creator: Matches selected design
  - [ ] Source: Shows "Thingiverse"
  - [ ] Link: Shows design URL

**Test D3: Quote Form Functionality**
- [ ] All form fields are present:
  - [ ] Full Name
  - [ ] Email
  - [ ] WhatsApp
  - [ ] Message type dropdown
  - [ ] Project details textarea (pre-filled)
  - [ ] Additional notes
  - [ ] Submit button
- [ ] Form is functional and can be submitted
- [ ] Required fields are marked
- [ ] Form submission works without errors

**Test D4: Quote Conversion**
- [ ] Quote request successfully submits
- [ ] Confirmation message displays
- [ ] Thank you page loads (or confirmation)
- [ ] No console errors during submission

---

### SECTION E: Refresh Button

**Test E1: Refresh Idle State**
- [ ] Refresh button visible in widget header
- [ ] Text shows: "⟳ Refresh Designs"
- [ ] Button is enabled and clickable

**Test E2: Refresh Action**
- [ ] User clicks refresh button
- [ ] Button immediately disables
- [ ] Button text changes to "Refreshing..."
- [ ] Loading spinner appears in widget
- [ ] New designs load
- [ ] Cache clears and refreshes

**Test E3: Refresh Complete**
- [ ] Loading spinner disappears
- [ ] New trending designs display (may be different from before)
- [ ] Button re-enables
- [ ] Button text returns to "⟳ Refresh Designs"
- [ ] No console errors

**Test E4: Manual Cache Clear (Console)**
```javascript
// In browser console:
thingiverseAPI.clearCache()
location.reload()
// Verify new designs load
```

---

### SECTION F: Responsive Design

**Test F1: Desktop View (1920px width)**
- [ ] Grid displays 3-4 columns
- [ ] Approximately 12-16 designs visible at once
- [ ] Images are large and clear
- [ ] Text is readable
- [ ] Buttons are large enough
- [ ] Spacing is appropriate
- [ ] No horizontal scroll needed

**Test F2: Tablet View (768-1024px width)**
- [ ] Grid displays 2-3 columns
- [ ] 6-8 designs visible at once
- [ ] Images are medium-sized
- [ ] Text readable on smaller screen
- [ ] Buttons touch-friendly (44px minimum)
- [ ] No layout breakage
- [ ] No horizontal scroll

**Test F3: Mobile View (375-480px width)**
- [ ] Grid displays 1 column
- [ ] Full-width design cards
- [ ] Vertical scrolling to see more designs
- [ ] Images scale appropriately
- [ ] Text remains readable
- [ ] Buttons are large and tappable (44px+)
- [ ] No horizontal scroll
- [ ] Touch interactions smooth

**Test F4: Device Rotation**
- [ ] Tablet portrait → landscape: Layout adjusts correctly
- [ ] Mobile portrait → landscape: Layout adjusts correctly
- [ ] No content cut off
- [ ] No layout shifts or jumps

**Test F5: Zoom Levels**
- [ ] 100% zoom: Normal view
- [ ] 75% zoom: Content still accessible
- [ ] 125% zoom: Responsive to larger text
- [ ] No layout breaking at any zoom level

---

### SECTION G: Performance Testing

**Test G1: Page Load Time**
```
Measure:
- First Contentful Paint (FCP): Target < 2.5s
- Largest Contentful Paint (LCP): Target < 3.5s
- Total Page Load: Target < 3 seconds

Tools:
- Lighthouse (Chrome DevTools)
- Network tab (measure waterfall)
- Performance tab (Core Web Vitals)
```

**Test G2: Lighthouse Audit**
```bash
# In Chrome DevTools:
1. Go to Lighthouse tab
2. Click "Analyze page load"
3. Review scores:
   - Performance: Target 90+
   - Accessibility: Target 90+
   - Best Practices: Target 90+
   - SEO: Target 90+
   - PWA: Optional target 90+
```

- [ ] Performance score: 90+
- [ ] No major issues reported
- [ ] Screenshot taken for documentation

**Test G3: Image Lazy Loading**
```javascript
// In console:
// Scroll down slowly
// Images should load as they come into view
// Check Network tab for "loading=lazy" images
```

- [ ] Images load as you scroll
- [ ] Images above fold load first
- [ ] Below-fold images load on scroll
- [ ] No excessive loading

**Test G4: API Response Time**
```javascript
// In console:
const start = performance.now()
fetch('https://www.thingiverse.com/rss/trending')
  .then(r => r.text())
  .then(t => {
    const end = performance.now()
    console.log(`API took ${end - start}ms`)
  })
```

- [ ] API response time < 1 second
- [ ] Network requests visible in Network tab
- [ ] No excessive API calls (caching working)

**Test G5: Caching Verification**
```javascript
// Check cache info:
thingiverseAPI.getCacheInfo()

// Expected:
// - Trending cache expiry: 7 days
// - Search cache expiry: 1 hour
// - Cache size: Should show cached items
```

- [ ] Cache stores trending designs
- [ ] Cache stores search results
- [ ] Expiry times correct
- [ ] Repeat visits use cache (faster)

---

### SECTION H: Browser Compatibility

**Test H1: Chrome/Edge (Chromium)**
- [ ] All features work
- [ ] CSS Grid renders correctly
- [ ] Animations smooth
- [ ] No console errors
- [ ] Lighthouse available

**Test H2: Firefox**
- [ ] All features work
- [ ] CSS Grid renders correctly
- [ ] Animations smooth
- [ ] No console errors
- [ ] Similar performance to Chrome

**Test H3: Safari (Desktop & iOS)**
- [ ] All features work
- [ ] CSS Grid renders correctly
- [ ] Animations smooth
- [ ] No console errors
- [ ] Touch interactions work on iOS

**Test H4: Mobile Browsers**
- [ ] Chrome Mobile: Works
- [ ] Safari iOS: Works
- [ ] Responsive design: Functions on all

---

### SECTION I: Console & Errors

**Test I1: Console Errors**
- [ ] Open DevTools console
- [ ] No red error messages
- [ ] No XSS warnings
- [ ] No CORS errors
- [ ] No 404 errors (except optional)

**Test I2: Network Errors**
- [ ] Check Network tab
- [ ] Thingiverse API: 200 status (success)
- [ ] Images: 200 status (all loaded)
- [ ] No failed requests

**Test I3: Security Warnings**
- [ ] No mixed content warnings
- [ ] No certificate warnings
- [ ] HTTPS used throughout
- [ ] No console security messages

---

### SECTION J: Accessibility

**Test J1: Keyboard Navigation**
- [ ] Tab through all buttons: Works
- [ ] Enter key on buttons: Triggers action
- [ ] Search input: Focusable and usable
- [ ] All interactive elements accessible

**Test J2: Alt Text**
- [ ] Right-click design image → Alt text describes design
- [ ] No generic "image" alt text
- [ ] Descriptive and helpful

**Test J3: Color Contrast**
- [ ] Button text readable on button background
- [ ] Text readable on all backgrounds
- [ ] No low-contrast text

**Test J4: Screen Reader**
- [ ] Buttons labeled clearly
- [ ] Links have descriptive text
- [ ] Form labels present
- [ ] No "click here" links

---

### SECTION K: User Experience

**Test K1: Visual Design**
- [ ] Design is modern and clean
- [ ] Color scheme is consistent
- [ ] Typography is readable
- [ ] Spacing is appropriate
- [ ] No cluttered areas
- [ ] Professional appearance

**Test K2: Interaction Feedback**
- [ ] Buttons highlight on hover (desktop)
- [ ] Buttons highlight on focus (keyboard)
- [ ] Buttons have active state (pressed)
- [ ] Hover effects are intuitive
- [ ] Loading spinner shows progress

**Test K3: User Flow**
- [ ] Discover trending design: Easy and intuitive
- [ ] Get quote for design: Clear path and simple
- [ ] Search for design: Quick and straightforward
- [ ] View on Thingiverse: Open new tab as expected
- [ ] Overall: Natural and logical flow

**Test K4: Copy & Messaging**
- [ ] Button text is clear: "Get Quote ✓", "More Details"
- [ ] Widget header is clear: "🔥 Trending Designs This Week"
- [ ] Error messages are helpful
- [ ] Search placeholder helpful: "Search for designs..."
- [ ] All text is professional and error-free

---

## Bug Report Template

When finding issues, document with:

```markdown
### Bug Report #[X]

**Severity:** Critical / High / Medium / Low

**Environment:**
- Device: [Desktop/Tablet/Mobile]
- Browser: [Chrome/Firefox/Safari]
- OS: [Windows/macOS/iOS/Android]

**Steps to Reproduce:**
1. [First step]
2. [Second step]
3. [Result]

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happened]

**Screenshots:**
[Attach image]

**Console Errors:**
[Paste any error messages]

**Additional Notes:**
[Any other relevant info]
```

---

## Test Sign-Off

Once all tests are completed, please fill out:

```
Tester Name: ________________________

Date Completed: ________________________

Overall Status:  ☐ PASS    ☐ FAIL    ☐ PASS WITH NOTES

Critical Issues: ☐ None    ☐ [Number]: _______

High Priority Issues: ☐ None    ☐ [Number]: _______

Recommended for Production: ☐ Yes    ☐ No    ☐ With Conditions

Notes:
_________________________________________________________________

_________________________________________________________________

Tester Signature: ________________________
```

---

## Success Criteria

✅ **PASS if:**
- Zero critical bugs found
- Trending widget displays correctly
- Search functionality works
- Get Quote form pre-fills properly
- Responsive design works on all tested devices
- No console errors
- Lighthouse score 90+
- All interactive elements work
- All links functional
- Performance acceptable (< 3s load)

⚠️ **PASS WITH NOTES if:**
- Minor UI inconsistencies (non-blocking)
- Low-priority issues that don't affect functionality
- Performance is acceptable but could be optimized
- Some edge cases need clarification

❌ **FAIL if:**
- Critical functionality broken
- Widget doesn't load
- Search doesn't work
- Form submission fails
- Major console errors
- Lighthouse score < 80
- Significant performance issues
- Unresponsive design
- Major security issues found

---

## Timeline

| Task | Duration | Status |
|------|----------|--------|
| Setup & Access | 15 min | [ ] |
| Section A-B Testing | 30 min | [ ] |
| Section C-D Testing | 20 min | [ ] |
| Section E-F Testing | 30 min | [ ] |
| Section G-H Testing | 30 min | [ ] |
| Section I-J Testing | 20 min | [ ] |
| Section K Testing | 15 min | [ ] |
| Bug Documentation | 15 min | [ ] |
| **Total Estimated** | **2.5 hours** | [ ] |

---

## Support & Questions

**For Technical Issues:**
- Check `/mk3dprint-dev/README_TEAM.md` for quick reference
- Check `/mk3dprint-dev/IMPLEMENTATION_GUIDE.md` for details
- Check browser console for error messages

**For Environment Access:**
- Netlify staging URL: [Configured by DevOps]
- Local testing: `python3 -m http.server 8000`

**For Clarifications:**
- Contact Development Team
- Review documentation provided

---

## Test Report Output

After completing testing, provide:

1. **Summary:** Pass/Fail status
2. **Issues Found:** List all bugs discovered
3. **Performance Data:** Lighthouse scores, load times
4. **Device Coverage:** Tested devices/browsers
5. **Recommendations:** Ready for production? Any concerns?
6. **Screenshots:** Documentation of any issues

---

**Test Plan Version:** 1.0
**Created:** February 10, 2026
**Status:** Ready for UAT

Thank you for thorough testing! Your feedback ensures production quality. 🎯
