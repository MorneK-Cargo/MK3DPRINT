import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, details } = body;

    if (!name || !email || !projectType || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.quoteRequest.create({
      data: {
        name,
        email,
        phone: phone || null,
        serviceType: projectType,
        details,
        status: 'pending'
      }
    });

    // Send email notification
    const emailHtml = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Details:</strong></p>
      <p>${details}</p>
    `;

    try {
      await fetch(`${process.env.NEXTAUTH_URL || ''}/api/sendNotificationEmail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          notification_id: process.env.NOTIF_ID_QUOTE_REQUEST || '',
          recipient_email: 'info@mk3dprint.org',
          subject: `New Quote Request from ${name}`,
          html_body: emailHtml
        })
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}
