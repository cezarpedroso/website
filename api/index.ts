// Vercel's Node function uses the same Express app as the Replit API service.
// Do not import src/index.ts here: it starts a long-lived port listener.
import app from '../artifacts/api-server/src/app';

export default function handler(
  req: Parameters<typeof app>[0],
  res: Parameters<typeof app>[1],
) {
  // Vercel can give a rewritten function its destination URL rather than the
  // original path. The rewrite carries the original API path in this parameter.
  const url = new URL(req.url ?? '/', 'http://internal');
  const apiPath = url.searchParams.get('__api_path');
  if (apiPath !== null) {
    url.searchParams.delete('__api_path');
    req.url = `/api/${apiPath}${url.search}`;
  }
  return app(req, res);
}
