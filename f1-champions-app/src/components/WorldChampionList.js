// Combination-file created on 26 January 2024
// src/components/WorldChampionList.js

import React, { useEffect, useState } from 'react';
import { getWorldChampions } from '../services/apiService';

const WorldChampionList = () => {
  const [worldChampions, setWorldChampions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const championsData = await getWorldChampions();
        console.log('Fetched World Champions:', championsData);
        setWorldChampions(championsData);
      } catch (error) {
        console.error('Error fetching world champions:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array for componentDidMount behavior

  return (
    <div>
      <h2>World Champions List</h2>
      <ul>
        {worldChampions.map((champion) => (
          <li key={champion.Driver.driverId}>
            {champion.Driver.givenName} {champion.Driver.familyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldChampionList;
