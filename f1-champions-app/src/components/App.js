// src/App.js 
import React, { useEffect, useState } from 'react';
import WorldChampionPDF from './components/WorldChampionPDF';
import { getWorldChampions } from './services/apiService';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = () => {
  const [worldChampions, setWorldChampions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWorldChampions();
        const championsData = response.MRData.StandingsTable.StandingsLists;
        setWorldChampions(championsData);
      } catch (error) {
        console.error('Error fetching world champions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Formula 1 World Champions</h1>
      <PDFDownloadLink document={<WorldChampionPDF worldChampions={worldChampions} />} fileName="world_champions.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
