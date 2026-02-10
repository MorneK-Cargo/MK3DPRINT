import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: 'Contact Form',
        message,
        status: 'new'
      }
    });

    // Send email notification
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    try {
      await fetch(`${process.env.NEXTAUTH_URL || ''}/api/sendNotificationEmail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION || '',
          recipient_email: 'info@mk3dprint.org',
          subject: `New Contact from ${name}`,
          html_body: emailHtml
        })
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact' },
      { status: 500 }
    );
  }
}
