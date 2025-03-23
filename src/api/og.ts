
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
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
            background: 'linear-gradient(to bottom, #1E293B, #0F172A)',
            padding: '40px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #3B82F6',
              padding: '40px',
              borderRadius: '20px',
              backgroundColor: 'rgba(15,23,42,0.8)',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              The HighLands Forum
            </h1>
            <p
              style={{
                fontSize: '30px',
                color: '#94A3B8',
                textAlign: 'center',
                marginBottom: '30px',
              }}
            >
              Professional Developer Portfolio
            </p>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#3B82F6',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '24px',
                }}
              >
                Web Development
              </div>
              <div
                style={{
                  backgroundColor: '#3B82F6',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '24px',
                }}
              >
                UI/UX Design
              </div>
              <div
                style={{
                  backgroundColor: '#3B82F6',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '24px',
                }}
              >
                API Development
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
