// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    // Check if the response status is 404 (Not Found)
    if (response.status === 404) {
        // You can customize the error message or perform additional logic here
        throw error(404, 'Page Not Foundddd');
    }

    return response;
};
