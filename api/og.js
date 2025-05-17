
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Default text
    const siteName = searchParams.get('siteName') || 'The HighLands Forum';
    const description = searchParams.get('description') || 'Professional developer portfolio showcasing expertise, projects, and services';
    
    // Create a simple HTML template for the OG image
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>OG Image</title>
          <style>
            body {
              margin: 0;
              padding: 40px;
              width: 1200px;
              height: 630px;
              background: linear-gradient(to right, #f0f4f8, #d9e2ec);
              font-family: system-ui, -apple-system, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .card {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 16px;
              background: white;
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
              padding: 40px;
              width: 90%;
              height: 90%;
            }
            h1 {
              font-size: 64px;
              font-weight: 700;
              color: #333;
              text-align: center;
              margin-bottom: 20px;
            }
            .divider {
              width: 80px;
              height: 4px;
              background-color: #3b82f6;
              margin-bottom: 30px;
            }
            p {
              font-size: 28px;
              color: #666;
              text-align: center;
              max-width: 70%;
              line-height: 1.4;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>${siteName}</h1>
            <div class="divider"></div>
            <p>${description}</p>
          </div>
        </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}
