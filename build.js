
// Improved build script for Vercel deployment
import { execSync } from 'child_process';

try {
  console.log('Beginning build process...');
  
  console.log('Installing dependencies (ignoring problematic packages)...');
  execSync('npm install --legacy-peer-deps --no-save', { stdio: 'inherit' });
  
  console.log('Installing Vite locally...');
  execSync('npm install vite@latest @vitejs/plugin-react-swc --legacy-peer-deps --no-save', { stdio: 'inherit' });
  
  console.log('Building project with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
