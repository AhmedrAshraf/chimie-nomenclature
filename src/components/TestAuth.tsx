import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function TestAuth() {
  useEffect(() => {
    // Test Supabase connection
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error('Supabase connection error:', error);
      } else {
        console.log('Supabase connected successfully');
      }
    });
  }, []);

  return null;
} 