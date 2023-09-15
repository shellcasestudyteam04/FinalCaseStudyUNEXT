import React, { useEffect, useState } from 'react';
import '../styles/hydro.css';

function Hydro() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      setError(null);
  
      // Make a GET request to your .NET backend API
      fetch(`https://localhost:7022/api/Energies/3`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any required headers here, such as authentication tokens.
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          setData(responseData);
          setIsLoading(false);
        })
        .catch((fetchError) => {
          setError(fetchError);
          setIsLoading(false);
        });
    }, []); // Empty dependency array to fetch data once when the component mounts
  
    return (
      <div>
        <h1>HYDRO ENERGY</h1>
  
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : data ? (
          <div className="table-container">
            <table className="solar-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => {
                  // Specify the fields you want to display
                  if (
                    key === 'contractorName' ||
                    key === 'amountInvested' ||
                    key === 'totalAmountInvested' ||
                    key === 'typeOfEnergy' ||
                    key === 'netEnergyGenerated'
                  ) {
                    return (
                      <tr key={key}>
                        <td>
                          <b>{key}</b>
                        </td>
                        <td>{JSON.stringify(data[key])}</td>
                      </tr>
                    );
                  }
                  return null; // Skip other fields
                })}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    );
}

export default Hydro;