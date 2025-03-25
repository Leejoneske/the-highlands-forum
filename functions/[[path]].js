
// This is a catch-all function for Cloudflare Pages
// It will handle all routes not explicitly defined by other functions
export async function onRequest(context) {
  // Pass through to the static assets
  return context.next();
}
