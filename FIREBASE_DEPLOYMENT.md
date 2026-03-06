# Firebase Deployment Guide

This guide will help you deploy your Next.js portfolio to Firebase Hosting.

## Prerequisites

1. A Firebase account (sign up at https://firebase.google.com/)
2. Firebase CLI installed globally

## Step 1: Install Firebase CLI

If you haven't installed Firebase CLI yet, run:

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

## Step 3: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project
4. Note your project ID

## Step 4: Initialize Firebase Hosting

In your project directory, run:

```bash
firebase init hosting
```

When prompted:
- Select "Use an existing project" and choose your Firebase project
- Set the public directory to: `out` (this is where Next.js exports static files)
- Configure as a single-page app: `Yes`
- Set up automatic builds and deploys with GitHub: `No` (you can set this up later if needed)
- Overwrite existing `firebase.json`: `No` (we've already created it)

## Step 5: Update .firebaserc

Open `.firebaserc` and replace `"your-firebase-project-id"` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

## Step 6: Build and Deploy

Now you're ready to deploy! Run:

```bash
npm run deploy
```

This will:
1. Build your Next.js app (which exports to the `out` directory)
2. Deploy the `out` directory to Firebase Hosting

Alternatively, you can run the commands separately:

```bash
npm run export    # Build the static export
firebase deploy   # Deploy to Firebase
```

Or deploy only hosting:

```bash
npm run deploy:hosting
```

## Step 7: Access Your Site

After deployment, Firebase will provide you with a URL like:
```
https://your-project-id.web.app
```

You can also access it via:
```
https://your-project-id.firebaseapp.com
```

## Troubleshooting

### Issue: Build fails
- Make sure all dependencies are installed: `npm install`
- Check for any TypeScript or linting errors: `npm run lint`

### Issue: Deployment fails
- Verify you're logged in: `firebase login`
- Check your Firebase project ID in `.firebaserc`
- Ensure Firebase Hosting is enabled in your Firebase Console

### Issue: Pages not loading correctly
- Make sure `next.config.ts` has `output: 'export'` configured
- Verify that `firebase.json` has the correct rewrites configuration

## Continuous Deployment (Optional)

You can set up automatic deployments via GitHub Actions or Firebase GitHub integration. For manual deployments, just run `npm run deploy` whenever you want to update your site.

