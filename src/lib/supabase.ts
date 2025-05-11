import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ryvjwwcrtcccknkdpxtx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dmp3d2NydGNjY2tua2RweHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MTg0MzMsImV4cCI6MjA2MjM5NDQzM30.bo6UZ-AaR9eCzmSxlm-RRzBTq9w6HzQxeaP7n0rJ-T4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 