
// This script uses Playwright to generate social media preview images
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function captureScreenshot() {
  console.log('Launching browser to capture social preview image...');
  
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext({
      viewport: { width: 1200, height: 630 }
    });
    
    const page = await context.newPage();
    
    // Navigate to the site with social preview parameter
    const url = process.env.NODE_ENV === 'production' 
      ? 'https://thehighlandsforum.com/?socialPreview=true' 
      : 'http://localhost:8080/?socialPreview=true';
      
    console.log(`Navigating to ${url}...`);
    
    await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 60000 // Increase timeout to 1 minute
    });
    
    // Allow more time for animations to complete
    console.log('Waiting for animations to complete...');
    await page.waitForTimeout(3000);
    
    // Ensure the public directory exists
    const distDir = path.join(__dirname, '../../dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    // Capture screenshot
    const screenshotPath = path.join(distDir, 'social-preview.png');
    console.log(`Capturing screenshot to ${screenshotPath}...`);
    
    await page.screenshot({ 
      path: screenshotPath,
      quality: 100,
      type: 'png',
      fullPage: false
    });
    
    console.log('Screenshot captured successfully!');
    await browser.close();
  } catch (error) {
    console.error('Error generating social preview:', error);
    process.exit(1);
  }
}

// Execute the function
captureScreenshot()
  .catch(err => {
    console.error('Error generating social preview:', err);
    process.exit(1);
  });
