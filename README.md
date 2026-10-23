# CampusFlow Website

Public product page for CampusFlow, a school operations platform by Divak.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

The interactive dashboard is illustrative and uses sample values. It is not connected to the CampusFlow demo app or a school database.

## Contact form

The form posts to the Vercel Function at `api/contact.js` and sends inquiries through the Resend email API to `community.divak@gmail.com`. The API key is only read by the server function and must never be added to frontend code.

1. Create a Resend account and API key, then verify a sending domain you control.
2. In Vercel, add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (for example, `CampusFlow <hello@your-verified-domain.com>`), and `CONTACT_TO_EMAIL` (`community.divak@gmail.com`) under Project Settings > Environment Variables.
3. Redeploy after saving the variables. The Gmail compose link is a fallback; the contact form itself sends through the server function.

For local end-to-end testing, link the project with the Vercel CLI, add the same values to an ignored `.env.local`, and run `npx vercel dev`. The regular Vite command serves the frontend only, so `/api/contact` is available only under Vercel or `vercel dev`.
