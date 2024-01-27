// apiService.js modified on 26 January 2024
// src/services/apiService.js

import axios from 'axios';

const API_BASE_URL = 'http://ergast.com/api/f1';

export const getWorldChampions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/driverStandings/1.json`);
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  } catch (error) {
    console.error('Error fetching world champions:', error);
    throw error;
  }
};
