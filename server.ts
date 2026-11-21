import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { consultationSchema, sanitizeInput } from './src/lib/validation.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'global-education-expert' });
  });

  app.post('/api/consultations/notify', async (req, res) => {
    try {
      const sanitizedPayload = {
        fullName: sanitizeInput(String(req.body?.fullName ?? '')),
        email: sanitizeInput(String(req.body?.email ?? '')),
        phone: sanitizeInput(String(req.body?.phone ?? '')),
        destination: sanitizeInput(String(req.body?.destination ?? '')),
        degreeLevel: sanitizeInput(String(req.body?.degreeLevel ?? '')),
        preferredDateTime: sanitizeInput(String(req.body?.preferredDateTime ?? '')),
        message: sanitizeInput(String(req.body?.message ?? '')),
      };

      const parsed = consultationSchema.safeParse(sanitizedPayload);
      if (!parsed.success) {
        return res.status(400).json({
          ok: false,
          error: 'Invalid consultation request details.',
          fieldErrors: parsed.error.flatten().fieldErrors,
        });
      }

      const booking = parsed.data;
      const referenceId = sanitizeInput(String(req.body?.referenceId ?? 'PENDING'));
      let emailSent = false;

      // Option A: Resend email relay (if configured)
      const resendKey = process.env.RESEND_API_KEY;
      const notifyEmail =
        process.env.CONSULTANCY_NOTIFY_EMAIL || 'info.globaleduexp@gmail.com';
      if (resendKey && notifyEmail) {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Global Education Expert <onboarding@resend.dev>',
            to: [notifyEmail],
            reply_to: booking.email,
            subject: `New Consultation Booking: ${booking.fullName} (${booking.destination})`,
            text: [
              `Reference ID: ${referenceId}`,
              `Student Name: ${booking.fullName}`,
              `Email: ${booking.email}`,
              `Phone / WhatsApp: ${booking.phone}`,
              `Preferred Destination: ${booking.destination}`,
              `Degree Level: ${booking.degreeLevel}`,
              `Preferred Date & Time: ${booking.preferredDateTime}`,
              `Message: ${booking.message || 'No additional message provided.'}`,
            ].join('\n'),
          }),
        });
        emailSent = emailResponse.ok;
      }

      // Option B: Formspree relay (if configured and Resend not used)
      const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
      if (!emailSent && formspreeEndpoint) {
        const fsResponse = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            referenceId,
            ...booking,
          }),
        });
        emailSent = fsResponse.ok;
      }

      // Option C: FormSubmit AJAX relay bound to notifyEmail (no API key required)
      if (!emailSent && notifyEmail) {
        try {
          const originUrl = process.env.APP_URL || 'https://www.globaleduexp.com';
          const formSubmitRes = await fetch(
            `https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Origin: originUrl,
                Referer: originUrl,
              },
              body: JSON.stringify({
                _subject: `New Consultation Booking: ${booking.fullName} (${booking.destination})`,
                _replyto: booking.email,
                referenceId,
                fullName: booking.fullName,
                email: booking.email,
                phone: booking.phone,
                destination: booking.destination,
                degreeLevel: booking.degreeLevel,
                preferredDateTime: booking.preferredDateTime,
                message: booking.message || 'No additional message provided.',
              }),
            }
          );
          emailSent = formSubmitRes.ok;
        } catch {
          // Ignore relay errors; Firestore booking is already persisted.
        }
      }

      return res.json({
        ok: true,
        emailSent,
        notifyEmail,
        referenceId,
      });
    } catch (error) {
      console.error('Consultation notification relay error:', error);
      return res.status(500).json({
        ok: false,
        error: 'Unable to process notification relay.',
      });
    }
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      const indexFile = path.join(distDir, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Build output not found.');
      }
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Global Education Expert server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
