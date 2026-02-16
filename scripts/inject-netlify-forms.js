const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

const formMarkup = `
<!-- Netlify Forms Detection -->
<form name="quote-request" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input name="bot-field" />
  <input name="form-name" value="quote-request" />
  <input name="name" />
  <input name="email" />
  <input name="phone" />
  <input name="projectType" />
  <textarea name="details"></textarea>
</form>
<form name="3d-scan-request" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input name="bot-field" />
  <input name="form-name" value="3d-scan-request" />
  <input name="name" />
  <input name="email" />
  <input name="phone" />
  <input name="company" />
  <input name="scanType" />
  <textarea name="description"></textarea>
</form>
`;

// Inject into all HTML files in out/
function injectForms(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      injectForms(fullPath);
    } else if (file.endsWith('.html')) {
      let html = fs.readFileSync(fullPath, 'utf8');
      if (html.includes('</body>') && !html.includes('netlify-honeypot')) {
        html = html.replace('</body>', formMarkup + '</body>');
        fs.writeFileSync(fullPath, html);
        console.log(`Injected Netlify forms into: ${path.relative(outDir, fullPath)}`);
      }
    }
  }
}

injectForms(outDir);
console.log('Netlify forms injection complete.');
