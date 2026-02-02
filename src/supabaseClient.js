import { createClient } from '@supabase/supabase-js'

// Ye dono cheezein aapko Supabase Dashboard > Settings > API mein milengi
const supabaseUrl = 'https://eylbajdshesiqvalwphl.supabase.co' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5bGJhamRzaGVzaXF2YWx3cGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NTExNjIsImV4cCI6MjA4NTMyNzE2Mn0.w1hBF1W0ajevcWlAIo0CPK3A3SXSOPLJbKZJJW3TN9g' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)