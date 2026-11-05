const { execSync } = require('child_process');
const fs = require('fs');

const frontendDir = 'd:/Custody_band_Watch/Frontend_Code';
const parentGit = 'd:/Custody_band_Watch/.git';

console.log('1. Initializing Git repository inside Frontend_Code...');
execSync('git init', { cwd: frontendDir, stdio: 'inherit' });

console.log('2. Configuring remote origin...');
try {
  execSync('git remote add origin https://github.com/SanjeevTEMP031/Custody_band_frontend.git', { cwd: frontendDir, stdio: 'ignore' });
} catch (e) {
  execSync('git remote set-url origin https://github.com/SanjeevTEMP031/Custody_band_frontend.git', { cwd: frontendDir, stdio: 'ignore' });
}

console.log('3. Switching to main branch...');
execSync('git checkout -B main', { cwd: frontendDir, stdio: 'inherit' });

console.log('4. Staging all frontend files directly at root...');
execSync('git add -A', { cwd: frontendDir, stdio: 'inherit' });

console.log('5. Creating commit...');
execSync('git commit -m "Restructure repository: move frontend files directly to root"', { cwd: frontendDir, stdio: 'inherit' });

console.log('6. Force-pushing clean root structure to origin main...');
execSync('git push origin main --force', { cwd: frontendDir, stdio: 'inherit' });

console.log('7. Removing old parent .git directory from d:/Custody_band_Watch...');
if (fs.existsSync(parentGit)) {
  fs.rmSync(parentGit, { recursive: true, force: true });
}

console.log('DONE! Frontend files are now directly at the root of the GitHub repository.');
