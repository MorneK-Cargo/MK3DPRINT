import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface ScanRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  scanType: string;
  description: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ScanRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.scanType || !body.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Map scan type to readable format
    const scanTypeLabels: { [key: string]: string } = {
      'small': 'Small (< 10cm)',
      'medium': 'Medium (10-50cm)',
      'large': 'Large (50-200cm)',
      'extra-large': 'Extra Large (> 200cm)',
    };

    const scanTypeLabel = scanTypeLabels[body.scanType] || body.scanType;

    // Create email content
    const emailContent = `
New 3D Scanning Request from mk3dprint.org

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Company: ${body.company || 'Not provided'}

Scan Size: ${scanTypeLabel}

Object Description:
${body.description}

---
This is an automated message from mk3dprint.org 3D Scanning request form.
Please respond to: ${body.email}
    `.trim();

    // Send email to your business inbox
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@mk3dprint.org',
      to: 'info@mk3dprint.org',
      subject: `New 3D Scanning Request - ${scanTypeLabel} from ${body.name}`,
      text: emailContent,
      replyTo: body.email,
    });

    // Optionally send confirmation email to user
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'noreply@mk3dprint.org',
        to: body.email,
        subject: 'We Received Your 3D Scanning Request',
        text: `
Hi ${body.name},

Thank you for submitting your 3D scanning request. We've received your information:

Scan Size: ${scanTypeLabel}

Our team will review your request and contact you within 24 hours to confirm the details and provide a quote.

If you have any questions in the meantime, feel free to reach out via WhatsApp or email.

Best regards,
MK 3D Printing Team
        `.trim(),
      });
    }

    return NextResponse.json(
      { message: 'Request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing 3D scan request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
