// src/routes/api/test/+server.ts
import type { RequestHandler } from '@sveltejs/kit';

console.log('The test route is working');

export const GET: RequestHandler = async () => {
    return new Response('API test route is working', { status: 200 });
};
