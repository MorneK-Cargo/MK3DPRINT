import { NextRequest, NextResponse } from 'next/server';

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

    // TODO: Store in database using Prisma
    // Example when database schema is ready:
    // const scanRequest = await prisma.scanRequest.create({
    //   data: {
    //     name: body.name,
    //     email: body.email,
    //     phone: body.phone || null,
    //     company: body.company || null,
    //     scanType: body.scanType,
    //     description: body.description,
    //   },
    // });

    // For now, log to console (useful for testing)
    console.log('New 3D Scan Request:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      scanType: scanTypeLabel,
      description: body.description,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        message: 'Request submitted successfully',
        scanType: scanTypeLabel,
      },
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
