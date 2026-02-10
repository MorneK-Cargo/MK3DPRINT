# MK3DPrint Website - Comprehensive Testing Plan

## Test Execution Date: [YYYY-MM-DD]
## Tested By: QA Team
## Status: [PENDING/IN PROGRESS/COMPLETE]

---

## 1. NAVIGATION & BASIC FUNCTIONALITY

### 1.1 Desktop Navigation
- [ ] Logo click scrolls to home (#home)
- [ ] Home navigation link scrolls to hero section
- [ ] Services link navigates to services section
- [ ] Shop link navigates to shop section
- [ ] Browse Models link navigates to Thingiverse browser
- [ ] 3D Scanning link navigates to scanning section
- [ ] Imports link navigates to imports section
- [ ] Gallery link navigates to gallery section
- [ ] About link navigates to about section
- [ ] Quote link navigates to quote calculator
- [ ] Contact link navigates to contact section
- [ ] WhatsApp button opens WhatsApp chat with correct number (+264 83 675 0117)
- [ ] All navigation items have smooth scroll behavior

### 1.2 Mobile Navigation
- [ ] Menu button opens/closes mobile menu
- [ ] All navigation links visible in mobile menu
- [ ] All mobile nav links navigate to correct sections
- [ ] Mobile WhatsApp link opens WhatsApp with correct number
- [ ] Mobile menu closes after selecting a link
- [ ] Mobile menu X button closes the menu

### 1.3 Header Styling
- [ ] Header appears at top of page when scrolled to top
- [ ] Header background changes on scroll (more opaque/shadow appears)
- [ ] Header is sticky and stays visible during scroll
- [ ] Logo displays correctly at proper size
- [ ] Navigation text is readable and properly colored

---

## 2. HERO SECTION

### 2.1 Hero Content
- [ ] Hero title displays: "Precision 3D Printing in Windhoek"
- [ ] Subtitle text displays correctly
- [ ] Description text displays correctly
- [ ] "Browse 3D Models" button navigates to Thingiverse browser (#thingiverse-browser)
- [ ] "Request a Quote" button navigates to quote calculator (#quote)
- [ ] Quick service links display (3D Scanning, 3D Printing, Imports)
- [ ] All quick service links navigate to correct sections

### 2.2 Hero Styling
- [ ] Hero section spans full viewport on desktop
- [ ] Hero content is centered
- [ ] Typography scales properly on mobile
- [ ] Animations appear smooth (fade in and slide up effects)
- [ ] Background color is correct (#f5f5f7)

---

## 3. SERVICES SECTION

### 3.1 Service Cards
- [ ] 3D Printing service card displays with icon and description
- [ ] Product Imports service card displays with icon and description
- [ ] 3D Scanning service card displays with icon and description
- [ ] Each card displays features list
- [ ] Cards have proper hover effects

### 3.2 Service Content
- [ ] Service descriptions are complete and readable
- [ ] Features lists display correctly
- [ ] All text is properly formatted

---

## 4. SHOP SECTION

### 4.1 Product Display
- [ ] "Shop" section header displays correctly
- [ ] "Items already printed" subtitle appears
- [ ] Product cards display (at least 5 items visible)
- [ ] Each product shows title, description, and price
- [ ] Product images display correctly (or placeholder icon appears)
- [ ] Price is formatted correctly (e.g., "N$ 35")

### 4.2 Shop Functionality
- [ ] Left scroll button scrolls products left
- [ ] Right scroll button scrolls products right
- [ ] Products can be scrolled horizontally
- [ ] Product cards are clickable to open details modal
- [ ] Modal displays full product information
- [ ] Modal close button (×) works
- [ ] Clicking outside modal closes it

### 4.3 WhatsApp Integration
- [ ] "Order" button on each product opens WhatsApp
- [ ] WhatsApp link includes product name in message
- [ ] WhatsApp number is correct: +264 83 675 0117
- [ ] WhatsApp link opens in new tab/window

---

## 5. THINGIVERSE BROWSER SECTION

### 5.1 Section Header & Intro
- [ ] Section title displays: "Browse Thingiverse Models"
- [ ] Section subtitle displays correctly
- [ ] Section background color is correct (#f5f5f7)

### 5.2 Search Functionality
- [ ] Search input field is visible and interactive
- [ ] Search placeholder text appears
- [ ] "Search on Thingiverse" button is visible
- [ ] Pressing Enter in search field triggers search
- [ ] Search button triggers search
- [ ] Search opens Thingiverse in new tab with correct query

### 5.3 Quick Categories
- [ ] All 8 quick category buttons display
- [ ] Clicking each category opens Thingiverse search for that category
- [ ] Links open in new tabs
- [ ] Categories include: Phone Stand, Cable Organizer, Desk Organizer, etc.

### 5.4 Trending Models
- [ ] At least 6 trending models display in grid
- [ ] Each model card shows:
  - [ ] Emoji/thumbnail icon
  - [ ] Model name
  - [ ] Model description
  - [ ] Like count (👍 format)
  - [ ] "View" button with external link icon
- [ ] "View" button on each model opens Thingiverse in new tab
- [ ] Model cards are properly responsive (2-3 columns based on screen size)

### 5.5 How It Works Section
- [ ] "How to Get Your Design Printed" heading displays
- [ ] Instructions text displays correctly
- [ ] WhatsApp button displays and is clickable
- [ ] WhatsApp button links to correct number with prefilled message
- [ ] "Explore All Models" button displays and links to Thingiverse

---

## 6. 3D SCANNING SECTION

### 6.1 Section Content
- [ ] Section title and subtitle display correctly
- [ ] Scanning technology description displays
- [ ] Equipment information displays (CR-Scan Raptor)
- [ ] Capabilities list displays with bullet points
- [ ] Images display correctly (if any)

### 6.2 Section Styling
- [ ] Background color and layout are correct
- [ ] Text is properly formatted and readable
- [ ] Section spacing is appropriate

---

## 7. IMPORTS SECTION

### 7.1 Section Content
- [ ] Section title and subtitle display correctly
- [ ] Import service description displays
- [ ] Benefits list displays with all items
- [ ] Images display correctly (if any)

### 7.2 Section Styling
- [ ] Background color matches design
- [ ] Layout is responsive on mobile
- [ ] Text is readable and properly formatted

---

## 8. GALLERY SECTION

### 8.1 Gallery Display
- [ ] Gallery section displays correctly
- [ ] Gallery items show with titles and descriptions
- [ ] Gallery images display (Photo to Trophy example)
- [ ] Gallery layout is responsive

### 8.2 Gallery Interaction
- [ ] Gallery items are clickable (if lightbox/modal enabled)
- [ ] All gallery content displays correctly

---

## 9. ABOUT SECTION

### 9.1 About Content
- [ ] Company story displays correctly
- [ ] About text is complete and readable
- [ ] Benefits list displays with all items
- [ ] Section layout is appropriate

### 9.2 About Styling
- [ ] Background and text colors are correct
- [ ] Typography is proper
- [ ] Mobile responsiveness is good

---

## 10. QUOTE CALCULATOR SECTION

### 10.1 Quote Form Display
- [ ] Quote calculator section title displays
- [ ] Quote form fields are visible
- [ ] Form is properly styled

### 10.2 Quote Form Functionality
- [ ] All form inputs are accessible
- [ ] Form accepts input (text, dropdowns, etc.)
- [ ] Submit button is clickable
- [ ] Form validation works (if applicable)
- [ ] WhatsApp integration works for quote submission

### 10.3 Quote Form Styling
- [ ] Form layout is clean and intuitive
- [ ] Mobile layout is responsive
- [ ] Input fields have proper styling and focus states

---

## 11. CONTACT SECTION

### 11.1 Contact Information
- [ ] Email address displays correctly
- [ ] WhatsApp number displays: +264 83 675 0117
- [ ] Location displays: Windhoek, Namibia
- [ ] All contact info is clickable/linkable

### 11.2 Contact Form (If Applicable)
- [ ] Contact form displays correctly
- [ ] Form fields are accessible
- [ ] Form submission works
- [ ] Success/error messages display

### 11.3 Social Links (If Applicable)
- [ ] WhatsApp link opens to correct number
- [ ] All contact methods work correctly

---

## 12. FOOTER SECTION

### 12.1 Footer Content
- [ ] Footer displays correctly at bottom of page
- [ ] Footer logo/branding displays
- [ ] Footer navigation links display
- [ ] Copyright text displays
- [ ] Contact info displays in footer
- [ ] All footer links are functional

### 12.2 Footer Styling
- [ ] Footer background color is correct
- [ ] Text is readable and properly colored
- [ ] Footer layout is responsive on mobile

---

## 13. RESPONSIVE DESIGN

### 13.1 Mobile (320px - 480px)
- [ ] All content displays without horizontal scroll
- [ ] Text is readable without zooming
- [ ] Navigation menu functions properly
- [ ] All buttons are clickable
- [ ] Images scale appropriately
- [ ] Spacing and padding is appropriate

### 13.2 Tablet (481px - 1024px)
- [ ] Content displays in proper layout for medium screens
- [ ] Navigation adapts properly
- [ ] Cards and grids display correctly
- [ ] All functionality works

### 13.3 Desktop (1025px+)
- [ ] All sections display in intended layout
- [ ] Multi-column grids display correctly
- [ ] Desktop navigation is visible
- [ ] Full viewport utilized appropriately

---

## 14. WHATSAPP NUMBER VERIFICATION

### 14.1 All WhatsApp Links
- [ ] Hero section: No WhatsApp button (browse models and quote buttons)
- [ ] Navigation bar WhatsApp button: Links to +264 83 675 0117 ✓
- [ ] Mobile menu WhatsApp link: Links to +264 83 675 0117 ✓
- [ ] Shop products Order buttons: Link to +264 83 675 0117 ✓
- [ ] Shop modal Order button: Links to +264 83 675 0117 ✓
- [ ] Thingiverse browser how-it-works section: Links to +264 83 675 0117 ✓
- [ ] Contact section: Displays +264 83 675 0117 ✓

### 14.2 WhatsApp Message Prefill
- [ ] Product order links include product name in message
- [ ] Thingiverse model link includes useful prefix message
- [ ] All prefilled messages are URL-encoded correctly

---

## 15. PERFORMANCE & LOADING

### 15.1 Page Load
- [ ] Page loads within acceptable time (< 3 seconds)
- [ ] Images load correctly
- [ ] No broken images or missing resources
- [ ] Console has no critical errors

### 15.2 Smooth Scrolling
- [ ] Smooth scroll behavior works for all navigation links
- [ ] Smooth scroll works on all modern browsers
- [ ] Scroll performance is smooth (no jank)

### 15.3 Animations
- [ ] Fade-in and slide-up animations work smoothly
- [ ] No animation stuttering or lag
- [ ] Animations are performance-efficient

---

## 16. BROWSER COMPATIBILITY

### 16.1 Chrome/Edge (Chromium-based)
- [ ] All features work correctly
- [ ] No visual glitches
- [ ] No console errors
- [ ] Responsive design works

### 16.2 Firefox
- [ ] All features work correctly
- [ ] No visual glitches
- [ ] No console errors
- [ ] Responsive design works

### 16.3 Safari
- [ ] All features work correctly
- [ ] No visual glitches
- [ ] No console errors
- [ ] Responsive design works

### 16.4 Mobile Browsers
- [ ] iOS Safari works correctly
- [ ] Android Chrome works correctly
- [ ] All mobile features function

---

## 17. ACCESSIBILITY

### 17.1 Keyboard Navigation
- [ ] Can navigate all sections using Tab key
- [ ] Can activate buttons using Enter/Space
- [ ] Tab order is logical and follows visual layout
- [ ] No keyboard traps

### 17.2 ARIA Labels
- [ ] Navigation items have proper labels
- [ ] Buttons have descriptive text or aria-labels
- [ ] Images have alt text or aria-labels
- [ ] Form inputs have labels

### 17.3 Color Contrast
- [ ] All text has sufficient contrast with background
- [ ] Important information is not conveyed by color alone
- [ ] Buttons are distinguishable from background

### 17.4 Screen Reader (if applicable)
- [ ] Page structure makes sense when read aloud
- [ ] All interactive elements are announced
- [ ] Images are described

---

## 18. SECURITY & DATA

### 18.1 SSL/HTTPS
- [ ] Site loads over HTTPS
- [ ] SSL certificate is valid
- [ ] No mixed content warnings

### 18.2 Links & External Resources
- [ ] All external links open in new tabs (_blank target)
- [ ] All external links have rel="noopener noreferrer"
- [ ] No security warnings when opening links

### 18.3 Form Security (if applicable)
- [ ] Forms don't expose sensitive data in URL
- [ ] WhatsApp links don't expose personal info
- [ ] No credentials in local storage

---

## 19. CONTENT VERIFICATION

### 19.1 Text Content
- [ ] All text is correct and up-to-date
- [ ] No typos or grammatical errors
- [ ] Company name displays correctly
- [ ] Phone number is correct: +264 83 675 0117
- [ ] Email is correct: info@mk3dprint.org
- [ ] Location is correct: Windhoek, Namibia

### 19.2 Images & Media
- [ ] Logo displays at correct size and quality
- [ ] All product images are visible
- [ ] Gallery images are visible
- [ ] No broken image links

### 19.3 Links & References
- [ ] All internal links work correctly
- [ ] Thingiverse links point to correct site
- [ ] External links point to correct destinations

---

## 20. TEST EXECUTION CHECKLIST

### Before Testing
- [ ] Test environment is set up
- [ ] Browser development tools are available
- [ ] Mobile testing device/emulator is ready
- [ ] Network connection is stable
- [ ] All test cases are understood

### During Testing
- [ ] Each test is performed on multiple browsers
- [ ] Both desktop and mobile views are tested
- [ ] Tests are performed in logical order
- [ ] All findings are documented
- [ ] Screenshots are taken for any issues

### After Testing
- [ ] All issues are categorized by severity
- [ ] All blocking issues are reported
- [ ] Test results are summarized
- [ ] Recommendations are provided

---

## TEST RESULTS SUMMARY

| Category | Status | Notes |
|----------|--------|-------|
| Navigation & Basic Functionality | [ ] PASS / [ ] FAIL | |
| Hero Section | [ ] PASS / [ ] FAIL | |
| Services Section | [ ] PASS / [ ] FAIL | |
| Shop Section | [ ] PASS / [ ] FAIL | |
| Thingiverse Browser | [ ] PASS / [ ] FAIL | |
| 3D Scanning Section | [ ] PASS / [ ] FAIL | |
| Imports Section | [ ] PASS / [ ] FAIL | |
| Gallery Section | [ ] PASS / [ ] FAIL | |
| About Section | [ ] PASS / [ ] FAIL | |
| Quote Calculator | [ ] PASS / [ ] FAIL | |
| Contact Section | [ ] PASS / [ ] FAIL | |
| Footer | [ ] PASS / / [ ] FAIL | |
| Responsive Design | [ ] PASS / [ ] FAIL | |
| WhatsApp Integration | [ ] PASS / [ ] FAIL | |
| Performance & Loading | [ ] PASS / [ ] FAIL | |
| Browser Compatibility | [ ] PASS / [ ] FAIL | |
| Accessibility | [ ] PASS / [ ] FAIL | |
| Security & Data | [ ] PASS / [ ] FAIL | |
| Content Verification | [ ] PASS / [ ] FAIL | |

---

## KNOWN ISSUES

[To be filled during testing]

---

## RECOMMENDATIONS

[To be filled during testing]

---

## SIGN-OFF

**QA Lead Name:** ___________________
**Date:** ___________________
**Status:** [ ] APPROVED / [ ] REJECTED

**Notes:**
