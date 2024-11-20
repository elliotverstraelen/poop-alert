// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL or Key is missing");
    throw new Error("Supabase URL or Key is missing");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);