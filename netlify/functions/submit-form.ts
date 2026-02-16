import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event: { httpMethod: string; body: string | null }) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = event.body || '';
    const params = new URLSearchParams(body);
    const formName = params.get('form-name') || 'unknown';

    // Honeypot spam check
    if (params.get('bot-field')) {
      return { statusCode: 200, headers, body: JSON.stringify({ message: 'OK' }) };
    }

    const data: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key !== 'bot-field' && key !== 'form-name') {
        data[key] = value;
      }
    });

    console.log(`[FORM SUBMISSION] ${formName}:`, JSON.stringify(data, null, 2));

    // Build email content
    const isQuote = formName === 'quote-request';
    const subject = isQuote
      ? `New Quote Request from ${data.name || 'Website'}`
      : `New 3D Scan Request from ${data.name || 'Website'}`;

    const rows = Object.entries(data)
      .map(([key, value]) => `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;text-transform:capitalize;">${key.replace(/([A-Z])/g, ' $1')}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${value || '-'}</td></tr>`)
      .join('');

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#36c1b3;padding:20px;border-radius:12px 12px 0 0;">
          <h2 style="color:white;margin:0;">MK 3D Print - ${isQuote ? 'Quote Request' : '3D Scan Request'}</h2>
        </div>
        <div style="background:#f9f9f9;padding:20px;border-radius:0 0 12px 12px;">
          <table style="width:100%;border-collapse:collapse;">${rows}</table>
          <p style="margin-top:20px;color:#666;font-size:13px;">Submitted via mk3dprint.org</p>
        </div>
      </div>
    `;

    // Send email
    const { error } = await resend.emails.send({
      from: 'MK 3D Print <notifications@mk3dprint.org>',
      to: ['info@mk3dprint.org'],
      subject,
      html,
    });

    if (error) {
      console.error('Email send error:', error);
      // Still return 200 — form data is logged even if email fails
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Form submitted successfully', form: formName }),
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
}
