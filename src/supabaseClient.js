import { createClient } from '@supabase/supabase-js'

// Ye dono cheezein aapko Supabase Dashboard > Settings > API mein milengi
const supabaseUrl = process.env.ProjectURL 
const supabaseAnonKey = process.env.AnonKey

export const supabase = createClient(supabaseUrl, supabaseAnonKey)