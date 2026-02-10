import { createClient } from '@supabase/supabase-js'

// Ye dono cheezein aapko Supabase Dashboard > Settings > API mein milengi
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL 
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

console.log("URL Check:", supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


