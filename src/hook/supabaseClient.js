// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Supabase URL or Key is missing in the environment variables');
  }

  
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
