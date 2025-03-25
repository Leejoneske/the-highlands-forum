
export function onRequest(context) {
  try {
    const { searchParams } = new URL(context.request.url);
    
    // Default text
    const siteName = searchParams.get('siteName') || 'The HighLands Forum';
    const description = searchParams.get('description') || 'Professional developer portfolio showcasing expertise, projects, and services';
    
    // Return a simple text response for now
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
