// src/routes/api/signup/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '../../../supabaseClient';
import prisma from '../../../prismaClient';

export const POST: RequestHandler = async ({ request }) => {
    const { fullName, email, password } = await request.json();

    if (!fullName || !email || !password) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return new Response(JSON.stringify({ error: 'User with this email already exists' }), { status: 400 });
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { full_name: fullName },
        },
    });

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    await prisma.user.create({
        data: {
            email,
            fullName,
            password, // Storing the plain password for now, replace with hashed password in the future
        },
    });

    return new Response(JSON.stringify({ message: 'Signup successful! Please check your email to confirm your account.' }), { status: 200 });
};