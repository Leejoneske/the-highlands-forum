
// This script uses Playwright to generate social media preview images
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function captureScreenshot() {
  console.log('Launching browser to capture social preview image...');
  
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 }
  });
  
  const page = await context.newPage();
  
  // Navigate to the site (use localhost when developing, your domain in production)
  const url = process.env.NODE_ENV === 'production' 
    ? 'https://thehighlandsforum.com' 
    : 'http://localhost:8080';
    
  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle' });
  
  // Allow time for animations to complete
  await page.waitForTimeout(2000);
  
  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '../../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Capture screenshot
  const screenshotPath = path.join(publicDir, 'social-preview.png');
  console.log(`Capturing screenshot to ${screenshotPath}...`);
  
  await page.screenshot({ 
    path: screenshotPath,
    quality: 90,
    type: 'png'
  });
  
  console.log('Screenshot captured successfully!');
  await browser.close();
}

// Execute the function
captureScreenshot()
  .catch(err => {
    console.error('Error generating social preview:', err);
    process.exit(1);
  });
