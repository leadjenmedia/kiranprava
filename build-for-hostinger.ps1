# Build script for Hostinger deployment
# Make sure to stop any running dev server (npm run dev) before running this

Write-Host "Building project for Hostinger hPanel..." -ForegroundColor Green

# Try to stop any Node processes (optional - you may need to do this manually)
Write-Host "`nNote: If build fails, please:" -ForegroundColor Yellow
Write-Host "1. Stop any running 'npm run dev' server (Ctrl+C)" -ForegroundColor Yellow
Write-Host "2. Close any editors with .next folder open" -ForegroundColor Yellow
Write-Host "3. Run this script again`n" -ForegroundColor Yellow

# Build the project
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Build successful!" -ForegroundColor Green
    Write-Host "`n📁 Upload these files to Hostinger hPanel:" -ForegroundColor Cyan
    Write-Host "   - Go to File Manager in hPanel" -ForegroundColor White
    Write-Host "   - Navigate to public_html folder" -ForegroundColor White
    Write-Host "   - Upload ALL contents from the 'out' folder" -ForegroundColor White
    Write-Host "`n📋 See DEPLOYMENT.md for detailed instructions" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Build failed. Please stop the dev server and try again." -ForegroundColor Red
}
