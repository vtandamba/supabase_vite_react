// src/components/DataList.js
import React, { useState, useEffect } from 'react';
import supabase from '../hook/supabaseClient';

const DataList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('maillage')
          .select('*')
          .limit(10);

        if (error) {
          throw error;
        }

        console.log('Data retrieved:', data); // Log des données récupérées
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message); // Log des erreurs
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <p>Data List</p>
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))
        ) : (
          <li>No data found</li>
        )}
      </ul>
    </>
  );
};

export default DataList;
