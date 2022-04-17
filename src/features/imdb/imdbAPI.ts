
import { Top250MovieTypes } from '@/features/imdb/imdbTypes';
export async function getImdbTop250Movies(): Promise<{ data: Top250MovieTypes }> {
    const response = await fetch('https://imdb-api.com/en/API/Top250Movies/'+process.env.NEXT_PUBLIC_IMDB_KEY, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const result = await response.json();
    return result;
}