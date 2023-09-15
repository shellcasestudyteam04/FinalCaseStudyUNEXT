import React, { useState } from 'react';
import '../styles/Employeedashboard.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Employeedashboard() {
  const [boxClicked, setBoxClicked] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [id, setId] = useState(''); // Initialize id as an empty string
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useNavigate();

  const handleBoxClick = (boxNumber) => {
    setBoxClicked(boxNumber);
  };

  const handleInputChange = (event) => {
    setId(event.target.value);
  };
  const handleLogoutButtonClick =() => {
    history('/Menu');
  };
  const fetchDataById = () => {
    setIsLoading(true);
    setData(null);
    setError(null);

    // Make a GET request to your .NET backend API with the ID as a parameter
    fetch(`https://localhost:7022/api/EnergyContractor/${id}`, {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDataById();
  };

  const boxImages = {
    1: 'url("https://cdn5.vectorstock.com/i/1000x1000/80/59/green-energy-source-solar-panel-background-vector-2978059.jpg")',
    2: 'url("https://images.vexels.com/media/users/3/169388/isolated/preview/8ae55200ad8cdc41bac73f0334acbafe-wind-turbine-generator-wind-farm-three-flat-by-vexels.png")',
    3: 'url("https://img.freepik.com/vetores-premium/paisagem-natural-e-barragem-hidroelectrica_24908-6567.jpg")',
    4: 'url("https://media.istockphoto.com/id/638737066/vector/color-eco-icons.jpg?s=612x612&w=0&k=20&c=FRoP0ns3v1_X8Zit7bSUwvI0jaqbfdVYxHuBLzdKC6U=")',
  };
  const handleAddContractor = async() => {
    history('/contractorUps');
  }
  const handleDeleteContractor = async () => {
    try {
      // Replace 'https://your-backend-url/api/contractors' with your actual backend API endpoint for deleting contractors by ID
      const baseUrl = 'https://localhost:7022/api/Contractors/';
      const url = `${baseUrl}${id}`;

      // Send a DELETE request to delete the contractor
      const response = await axios.delete(url);

      if (response.status === 204) {
        // Contractor deleted successfully
        console.log(`Contractor with ID ${id} deleted successfully`);
        const successMessageElement = document.createElement('div');
          successMessageElement.innerHTML = 'Contractor has been deleted successfully';
          successMessageElement.classList.add('success-message'); // You can add CSS class for styling
          const targetContainer = document.getElementById('successMessage');
          targetContainer.appendChild(successMessageElement);
        // You can also show a success message to the user
      } else {
        console.error('Failed to delete contractor');
        const failMessageElement = document.createElement('div');
          failMessageElement.innerHTML = '<p>Your data has some error.</p>';
          failMessageElement.classList.add('failure-message'); // You can add CSS class for styling
          const targetContainer = document.getElementById('successMessage');
          targetContainer.appendChild(failMessageElement);
        // Handle the error, show an error message, etc.
      }
    } catch (error) {
      console.error('Error deleting contractor', error);
      // Handle the error, show an error message, etc.
    }
  };

  return (
    <div className="App">
      <h1>RENEWABLE ENERGIES</h1>
      <div className="box-container">
        {[1, 2, 3, 4].map((boxNumber) => (
          <Link
            key={boxNumber}
            to={boxNumber === 1 ? '/solar' : boxNumber === 2 ? '/wind' : boxNumber === 3 ? '/hydro' : boxNumber === 4 ? '/bio' : `#${boxNumber}`}
            className={`box ${boxClicked === boxNumber ? 'active' : ''}`}
            // onClick={() => history(boxNumber)}
            onClick={() => handleBoxClick(boxNumber)} // Call handleBoxClick on click
            style={{
              backgroundImage: boxImages[boxNumber] || 'none',
            }}
          >
            {/* Box content */}
          </Link>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Enter ID:
          <input type="text" value={id} onChange={handleInputChange} />
        </label>
        <button type="submit">Fetch Data</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className="table-container">
          <h3>Data by ID: {id}</h3>
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
                  key === 'quantityGenerated' ||
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
      )}
       <br></br>
    <div>
      <button onClick={handleDeleteContractor} style={{ width: '250px' , backgroundColor: 'red', color: 'white'}}>Delete This Contractor</button>
      </div><br></br>
      <div>
      <button onClick={handleAddContractor} style={{ width: '250px' , backgroundColor: 'green', color: 'white'}}>Add New Contractor</button>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <button onClick={handleLogoutButtonClick} style={{ marginLeft: '1290px' , backgroundColor: 'red', color: 'white'}}>Logout</button>
          </div>
      </div>
      <p id ="successMessage"></p>
    </div>
   
  );
}

export default Employeedashboard;
