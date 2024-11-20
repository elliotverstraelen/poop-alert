
import { writable } from 'svelte/store';
import { supabase } from './supabaseClient';

export const dataStore = writable<any[]>([]);

export const fetchData = async () => {
  const { data, error } = await supabase.from('your-table').select('*');
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    dataStore.set(data);
  }
};