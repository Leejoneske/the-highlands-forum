
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

// This is a Vercel Edge Function that generates Open Graph images
// For Cloudflare Pages, we need to adapt this or create an alternative
export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Default text
    const siteName = searchParams.get('siteName') || 'The HighLands Forum';
    const description = searchParams.get('description') || 'Professional developer portfolio showcasing expertise, projects, and services';
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#f9fafb',
            padding: '40px 50px',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
              background: 'white',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              padding: '60px',
              width: '100%',
              height: '100%'
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#333',
                textAlign: 'center',
                marginBottom: '20px',
                lineHeight: 1.1
              }}
            >
              {siteName}
            </h1>
            
            <div
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#3b82f6',
                marginBottom: '30px'
              }}
            />
            
            <p
              style={{
                fontSize: '28px',
                color: '#666',
                textAlign: 'center',
                maxWidth: '70%',
                lineHeight: 1.4
              }}
            >
              {description}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    );
  } catch (error: any) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}
