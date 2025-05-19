
import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';

console.log('Installing dependencies...');
execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

// Install Vite locally if it doesn't exist
console.log('Installing Vite locally...');
try {
  execSync('npm install vite@latest @vitejs/plugin-react-swc --save-dev --legacy-peer-deps --no-save', { stdio: 'inherit' });
} catch (error) {
  console.warn('Warning: Could not install Vite and plugin, but continuing build...');
}

// Check if build script exists in package.json
if (existsSync('./package.json')) {
  const pkgJson = JSON.parse(readFileSync('./package.json', 'utf8'));
  if (!pkgJson.scripts || !pkgJson.scripts.build) {
    console.log('No build script found in package.json. Creating default build command...');
    execSync('npx vite build', { stdio: 'inherit' });
  } else {
    console.log('Running npm build script...');
    execSync('npm run build', { stdio: 'inherit' });
  }
} else {
  console.log('package.json not found. Running default Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
}

console.log('Build completed');
