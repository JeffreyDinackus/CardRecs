import { createClient } from '@supabase/supabase-js'



// const REACT_SUPABASE_CLIENT_URL = import.meta.env.REACT_SUPABASE_CLIENT_URL

const REACT_SUPABASE_CLIENT_URL = "https://uxajhauykshdjvxueyoi.supabase.co"

// const REACT_SUPABASE_CLIENT_URL_ANON_KEY = import.meta.env.REACT_SUPABASE_CLIENT_URL_ANON_KEY

const REACT_SUPABASE_CLIENT_URL_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4YWpoYXV5a3NoZGp2eHVleW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMTQ4MTAsImV4cCI6MjAyNjc5MDgxMH0.Cbrmod_k-il5pH2CH9ZfW-58kaiijQHyrn0vuxCQOog"


// Create a single supabase client for interacting with your database
export const supabase = createClient(REACT_SUPABASE_CLIENT_URL, REACT_SUPABASE_CLIENT_URL_ANON_KEY)