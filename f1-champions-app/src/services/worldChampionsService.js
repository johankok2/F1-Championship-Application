// worldChampionsService.js created by Johan Kok
import { getWorldChampions } from './apiService'; // Adjust the path accordingly

export const fetchWorldChampions = async () => {
  try {
    const championsData = await getWorldChampions();
    console.log('Fetched World Champions:', championsData);
    return championsData;
  } catch (error) {
    console.error('Error fetching world champions:', error);
    throw error;
  }
};
