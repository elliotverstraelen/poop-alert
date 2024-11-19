// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import pb from '$lib/pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
    // Load the auth store from cookies
    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    // Refresh the auth store to ensure it's valid
    if (pb.authStore.isValid) {
        try {
            await pb.collection('users').authRefresh();
        } catch (_) {
            pb.authStore.clear();
        }
    }

    // Make the auth store and user available in locals
    event.locals.pb = pb;
    event.locals.user = structuredClone(pb.authStore.model);

    const response = await resolve(event);

    // Set the auth store cookie in the response
    response.headers.set('set-cookie', pb.authStore.exportToCookie({ secure: false }));

    return response;
};
