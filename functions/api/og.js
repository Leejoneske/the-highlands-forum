
export function onRequest(context) {
  try {
    const { searchParams } = new URL(context.request.url);
    
    // Default text
    const siteName = searchParams.get('siteName') || 'The HighLands Forum';
    const description = searchParams.get('description') || 'Professional developer portfolio showcasing expertise, projects, and services';
    
    // Simple HTML template for the OG image
    const html = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:1200px;height:630px;background-color:#f9fafb;padding:40px 50px;font-family:sans-serif">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:20px;background:white;box-shadow:0 8px 30px rgba(0,0,0,0.12);padding:60px;width:100%;height:100%">
          <h1 style="font-size:64px;font-weight:700;color:#333;text-align:center;margin-bottom:20px;line-height:1.1">${siteName}</h1>
          <div style="width:80px;height:4px;background-color:#3b82f6;margin-bottom:30px"></div>
          <p style="font-size:28px;color:#666;text-align:center;max-width:70%;line-height:1.4">${description}</p>
        </div>
      </div>
    `;
    
    // For now, let's return a text response indicating this is a placeholder
    return new Response(
      `OG Image API - This would generate an image with: ${siteName} - ${description}`,
      {
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}
