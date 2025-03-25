
export function onRequest(context) {
  // Add CORS headers for API requests
  const url = new URL(context.request.url);
  
  if (url.pathname.startsWith('/api/')) {
    const response = context.next();
    
    return response.then(originalResponse => {
      const newResponse = new Response(originalResponse.body, originalResponse);
      
      newResponse.headers.set('Access-Control-Allow-Origin', '*');
      newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');
      
      return newResponse;
    });
  }
  
  return context.next();
}
