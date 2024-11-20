// src/routes/api/login/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '../../../supabaseClient';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, password } = await request.json();

		console.log('Received login request:', email, password);

		// Normalize email to lowercase
		const normalizedEmail = email.toLowerCase();

		const { data, error } = await supabase.auth.signInWithPassword({
			email: normalizedEmail,
			password,
		});

		if (error) {
			console.error('Error during signInWithPassword:', error);
			return new Response(JSON.stringify({ error: error.message }), { status: 400 });
		}

		console.log('Login successful:', data);
		return new Response(JSON.stringify({ message: 'Login successful!' }), { status: 200 });
	} catch (error) {
		console.error('Error handling login request:', error);
		return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
	}
};