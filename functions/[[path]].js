
// This is a catch-all function for Cloudflare Pages
// It will handle all routes not explicitly defined by other functions
export function onRequest(context) {
  // Serve index.html for all client-side routes
  if (!context.request.url.includes('.') && !context.request.url.startsWith('/api/')) {
    return context.env.ASSETS.fetch(new URL('/index.html', context.request.url));
  }
  
  // Pass through to the static assets
  return context.next();
}
