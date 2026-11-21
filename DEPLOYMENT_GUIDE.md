# Beginner-Friendly Launch & Custom Domain Guide — Global Education Expert

This guide walks you through saving your website code to GitHub, enabling email alerts for new student inquiries, deploying your site for free on Vercel, and connecting your custom domain—no coding background required.

---

## Step 1: Save Your Project to GitHub

1. Create a free account at **https://github.com** if you do not have one yet.
2. Click the **+** icon at the top-right and select **New repository**.
3. Name it `global-education-expert`, choose **Private** (recommended), and click **Create repository**.
4. Download your project folder from AI Studio (or copy all files into a local folder).
5. On GitHub, either:
   - Click **uploading an existing file** on your new repository page and drag-and-drop your project folders (`src/`, `server.ts`, `index.html`, `package.json`, `vite.config.ts`, `firebase-applet-config.json`, `firestore.rules`, `tsconfig.json`), **OR**
   - Install **GitHub Desktop** (https://desktop.github.com), sign in, choose **Add Local Repository**, select your project folder, click **Commit to main**, and click **Publish repository**.

---

## Step 2: Database & Email Notification Setup

### A. Cloud Database (Already Connected)
Your consultation booking form is already wired to your **Firebase Firestore** cloud database (`firebase-applet-config.json` + `firestore.rules`):
- Every student booking submitted on the Consultation page is saved immediately to Firestore.
- To view, schedule, add notes, or export bookings to CSV, scroll to the bottom of any page on your website and click **Consultant Admin Portal**, then sign in with your Google account (`azfar.mazumder@gmail.com`).

### B. Optional Instant Email Alerts (Resend or Formspree)
If you also want an email sent to your inbox every time a student submits the booking form:
- **Option 1 — Resend (Free tier: 3,000 emails/month):**
  1. Sign up at **https://resend.com** and create an API key.
  2. Add `RESEND_API_KEY` and `CONSULTANCY_NOTIFY_EMAIL` (your email address) in your hosting Environment Variables (Step 3 below).
- **Option 2 — Formspree (Zero setup):**
  1. Sign up at **https://formspree.io**, create a new form, and copy your `https://formspree.io/f/xxxxxxx` endpoint URL.
  2. Add `FORMSPREE_ENDPOINT` in your hosting Environment Variables.

---

## Step 3: Deploy for Free on Vercel (or Render / Cloud Run)

Because this app includes both the React frontend and the Express server (`server.ts`):

1. **Static Frontend + Firestore (Fastest Free Hosting on Vercel):**
   - Sign up at **https://vercel.com** using your GitHub account.
   - Click **Add New → Project** and import your `global-education-expert` repository.
   - Leave **Framework Preset** as `Vite`, **Build Command** as `npm run build`, and **Output Directory** as `dist`.
   - Click **Deploy**. Your site will go live in under 60 seconds with automatic HTTPS/SSL!
   - *(Note: If you also want the `/api/consultations/notify` server route active, deploy on **Render.com** or **Google Cloud Run** using Build Command `npm install && npm run build` and Start Command `npm start`, or connect Formspree directly).*

2. **Add Your Domain to Firebase Authorized Domains:**
   - Open the **Firebase Console** (https://console.firebase.google.com) → Select your project → **Authentication → Settings → Authorized domains**.
   - Click **Add domain** and enter your Vercel URL and your custom domain (e.g., `globaleducationexpert.com` and `www.globaleducationexpert.com`) so Admin Google Sign-In works on your live domain.

---

## Step 4: Connect Your Custom Domain

1. In your **Vercel Dashboard**, open your project → **Settings → Domains**.
2. Type your domain name (e.g., `globaleducationexpert.com`) and click **Add**.
3. Vercel will show you two simple DNS records to copy:
   - **A Record:** Host `@` → Value `76.76.21.21`
   - **CNAME Record:** Host `www` → Value `cname.vercel-dns.com`
4. Log in to where you bought your domain (Namecheap, GoDaddy, Cloudflare, etc.), open **DNS Management**, add those two records, and save.
5. Wait 10–30 minutes for DNS propagation. Vercel automatically issues a free **SSL certificate (HTTPS)** so visitors see the secure padlock icon immediately.
