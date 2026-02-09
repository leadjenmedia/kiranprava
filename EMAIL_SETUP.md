# Contact Form Email Setup Guide

## Overview

The contact form now sends submissions via email to **<support@kiranprava.com>**. You need to configure SMTP credentials to enable this functionality.

## Quick Setup

### Step 1: Copy Environment File

Copy the example environment file to create your local configuration:

```bash
copy .env.local.example .env.local
```

### Step 2: Choose an Email Service

#### Option A: Gmail (Recommended for Quick Setup)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Visit: <https://myaccount.google.com/apppasswords>
   - Select "Mail" and your device
   - Copy the 16-character password
3. **Update .env.local**:

   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASS=your-16-char-app-password
   SMTP_FROM=your-gmail@gmail.com
   ```

#### Option B: SendGrid (Recommended for Production)

1. **Create account** at <https://sendgrid.com> (free tier: 100 emails/day)
2. **Create API Key**: Settings → API Keys → Create API Key
3. **Update .env.local**:

   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   SMTP_FROM=verified-sender@yourdomain.com
   ```

#### Option C: Your Hosting Provider

Contact your hosting provider (Hostinger, etc.) for SMTP credentials and update accordingly.

### Step 3: Restart Development Server

After creating `.env.local`, restart the dev server:

```bash
npm run dev
```

## Testing

1. Navigate to <http://localhost:3000/contact>
2. Fill out and submit the form
3. Check **<support@kiranprava.com>** inbox for the email

## Production Deployment

When deploying to production:

1. Add environment variables to your hosting platform (Vercel, Netlify, Hostinger, etc.)
2. **Do NOT commit `.env.local`** to version control (already in .gitignore)
3. Test the form after deployment to ensure emails are being sent

## Troubleshooting

### "Failed to send message" Error

- Verify SMTP credentials are correct
- Check that 2FA is enabled (for Gmail)
- Ensure App Password is used, not regular password (for Gmail)
- Check server logs for detailed error messages

### Email Not Received

- Check spam/junk folder
- Verify the recipient email (<support@kiranprava.com>) is correct
- Test with a different email service

## Security Notes

- `.env.local` is in `.gitignore` - never commit credentials
- SMTP credentials are kept server-side only
- API route validates all inputs before sending emails
