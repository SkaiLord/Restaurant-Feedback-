import { supabaseClient } from '@/utils/supabaseClient';
import { unstable_noStore as noStore } from 'next/cache';

export async function createReview(review) {
  noStore();
  const result = await supabaseClient.from('reviews').insert(review).single();
  // if (error) console.log(result);
  return result;
}

export async function readReviews() {
  noStore();
  const result = await supabaseClient.from('reviews').select('*');
  // console.log(data);
  // if (error) console.log(error);
  return result;
}
