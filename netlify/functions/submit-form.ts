export async function handler(event: { httpMethod: string; body: string | null }) {
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
      if (key !== 'bot-field') {
        data[key] = value;
      }
    });

    // Log submission (visible in Netlify Function logs dashboard)
    console.log(`[FORM SUBMISSION] ${formName}:`, JSON.stringify(data, null, 2));

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
