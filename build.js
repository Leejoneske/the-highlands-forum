
// Simple build script for Vercel deployment
const { execSync } = require('child_process');

try {
  console.log('Installing Vite locally...');
  execSync('npm install vite@latest --save-dev', { stdio: 'inherit' });
  
  console.log('Building project with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
