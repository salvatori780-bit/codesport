# Deployment Guide

This guide will help you deploy the Francesco Salvatori Portfolio to various platforms.

## Vercel (Recommended)

### Prerequisites
- A Vercel account (https://vercel.com)
- GitHub repository with your code

### Steps

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Vercel will auto-detect the framework (Vite)

3. **Configure Build Settings** (Usually auto-detected)
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

If you need to add environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables (they must start with `VITE_`)

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

## Build Optimization

The project is already optimized with:
- Code splitting
- Asset minification
- Image optimization
- Cache headers

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node version compatibility (>=18.0.0)
- Review build logs for specific errors

### Images Not Loading
- Ensure all image imports use the correct path
- Check that `figma:asset` imports are properly configured

### Routing Issues
- The `vercel.json` file handles SPA routing
- All routes redirect to `index.html`

## Performance

After deployment, check performance with:
- Vercel Analytics (built-in)
- Google Lighthouse
- WebPageTest

## Support

For issues with:
- **Vercel**: https://vercel.com/support
- **This project**: Contact salvatori780@gmail.com
