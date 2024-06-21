import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vbtlezffojzixzjbdmcb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZidGxlemZmb2p6aXh6amJkbWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxODk1MjMsImV4cCI6MjAzMzc2NTUyM30.yzSywyOHYLF-0dYyOIbalVGJtLF9vEVhHaGmMHgQ8TA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
