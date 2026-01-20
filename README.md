# StackManager.ai Landing Page

A modern, responsive landing page built with Next.js 16, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

## Connect Your Domain (stackmanager.ai)

After deploying to Vercel:

1. Go to your project dashboard in Vercel
2. Click **Settings** → **Domains**
3. Add `stackmanager.ai`
4. Add `www.stackmanager.ai` (optional, for www redirect)

### DNS Configuration

Add these records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

**Alternative: Use Vercel Nameservers**

For full DNS management by Vercel, change your nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

## Customization

### Update Content

Edit `src/app/page.tsx` to customize:
- Hero text and tagline
- Features list
- Benefits
- Stats/metrics
- Footer links

### Update Branding

Edit `tailwind.config.ts` to change:
- Primary colors
- Accent colors
- Fonts

### Update Metadata

Edit `src/app/layout.tsx` to update:
- Page title
- Meta description
- Open Graph tags
- Twitter card

## Project Structure

```
stackmanager-landing/
├── src/
│   └── app/
│       ├── globals.css     # Global styles + Tailwind
│       ├── layout.tsx      # Root layout + metadata
│       └── page.tsx        # Landing page component
├── public/                 # Static assets (add logo, images here)
├── tailwind.config.ts      # Tailwind configuration
├── vercel.json            # Vercel deployment config
└── package.json
```

## Adding Features

### Email Collection

The waitlist form currently logs to console. Integrate with:
- [Mailchimp](https://mailchimp.com)
- [ConvertKit](https://convertkit.com)
- [Resend](https://resend.com)
- Custom API endpoint

### Analytics

Add to `src/app/layout.tsx`:
- Google Analytics
- Plausible
- Vercel Analytics (`@vercel/analytics`)

## License

MIT
