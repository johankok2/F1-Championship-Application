// raceWinnersService.js created by Johan Kok
import { getRaceWinnersByYear } from './apiService'; // Adjust the path accordingly

export const fetchRaceWinnersByYear = async (year) => {
  try {
    const raceWinnersData = await getRaceWinnersByYear(year);
    console.log(`Fetched Race Winners for ${year}:`, raceWinnersData);
    return raceWinnersData;
  } catch (error) {
    console.error(`Error fetching race winners for ${year}:`, error);
    throw error;
  }
};
