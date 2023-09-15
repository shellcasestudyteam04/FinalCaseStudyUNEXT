import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import '../styles/ContractorDashboard.css';
import { useNavigate} from 'react-router-dom';
import '../styles/getid.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ContractorDashboard() {
    const[user,setUser] = useState({energyid:'',typeOfEnergy:'',netEnergyGenerated:'',totalAmountInvested:''});
    const location = useLocation(); 
    //   const [Energy_id, setEnergyId] = useState('');
    //   const [type_of_energy, setType] = useState('');
    //   const [net_energy_generated, setNet] = useState('');
    //   const [total_amaount_invested, setTotal] = useState('');
    //   const va = [];
    //   const ba = [];
      
    const history = useNavigate();

    const handleContractorUps = async (e) => {
      e.preventDefault();
      try {
        const uu = user.energyid;
        const baseUrl = "https://localhost:7022/api/Energies/";
        const url = `${baseUrl}${uu}`;
    
        // Fetch the current totalAmountInvested
        const response1 = await axios.get(url);
        const currentTotalAmountInvested = response1.data.totalAmountInvested;
    
        // Calculate the new totalAmountInvested by adding netEnergyGenerated
        const newTotalAmountInvested =
          currentTotalAmountInvested + user.netEnergyGenerated;
    
        // Update the user object with the new totalAmountInvested
        setUser((prevUser) => ({
          ...prevUser,
          totalAmountInvested: newTotalAmountInvested,
        }));
    
        // Update the totalAmountInvested in the database by sending a PUT request
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...user,
            totalAmountInvested: newTotalAmountInvested,
          }),
        });
    
        if (response.status === 200 || response.status === 204) {
          // Authentication successful, handle it accordingly (e.g., store tokens)
          console.log('Update successful');
          const successMessageElement = document.createElement('div');
          successMessageElement.innerHTML = '<p>Your data has been successfully updated. Check the performance below.</p>';
          successMessageElement.classList.add('success-message'); // You can add CSS class for styling
          const targetContainer = document.getElementById('successMessage');
          targetContainer.appendChild(successMessageElement);
        } else {
          const failMessageElement = document.createElement('div');
          failMessageElement.innerHTML = '<p>Your data has some error.</p>';
          failMessageElement.classList.add('failure-message'); // You can add CSS class for styling
          const targetContainer = document.getElementById('successMessage');
          targetContainer.appendChild(failMessageElement);
        }
      } catch (error) {
        // Handle authentication error (e.g., display error message)
        console.error('Update failed', error);
      }
    };
    
        const [data, setData] = useState(null); // State to store fetched data

        const handleButtonClick = () => {
            // Replace 'https://your-backend-url/api/endpoint' with your actual backend API endpoint
            const uu = user.energyid;
           const baseUrl = "https://localhost:7022/api/Energies/";
           const url = `${baseUrl}${uu}`;
            axios.get(url)
              .then((response) => {
                // Set the received data in the state
                setData(response.data);
              })
              .catch((error) => {
                // Handle any errors here
                console.error(error);
              });
          };
          const handleLogoutButtonClick =() => {
            history('/Menu');
          };
      return (
        <div>  
          <center>
         {/* <p>Username:{username}</p> */}
          <h2>Updating Energy for Contractors</h2>
          </center>
          <form onSubmit={handleContractorUps}>
            <div>
              <label>Energy ID:</label>
              <input
                type="number"
                value={user.energyid}
                onChange={(e) => setUser({ ...user, energyid: parseInt(e.target.value)})}
              />
            </div>
            <div>
              <label>Type of Energy :</label>
              <input
                type="text"
                value={user.typeOfEnergy}
                onChange={(e) => setUser({ ...user, typeOfEnergy: e.target.value })}
              />
            </div>
            <div>
              <label>Net:</label>
              <input
                type="text"
                value={user.netEnergyGenerated}
                onChange={(e) => setUser({ ...user, netEnergyGenerated: parseInt(e.target.value)})}
              />
            </div>
            {/* <div>
              <label>Total :</label>
              <input
                type="text"
                value={user.totalAmountInvested}
                onChange={(e) => setUser({ ...user, totalAmountInvested: parseInt(e.target.value)})}
              />
            </div> */}
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          <br></br>
          <br></br>
          <p id = "successMessage"></p>
          <br></br>
          <div>
          <button onClick={handleButtonClick}>To check performance, click here</button>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <button onClick={handleLogoutButtonClick} style={{ marginLeft: '1290px' , backgroundColor: 'red', color: 'white'}}>Logout</button>
          </div>

            {data && (
            <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => {
                  if (key === "energyId" || key === "amountInvested" || key === "quantityGenerated" || key === "typeOfEnergy" || key === "netEnergyGenerated")
                  {
                  return (
                  <tr key={key}>
                    <td >{key}</td>
                    <td>{JSON.stringify(data[key])}</td>
                  </tr>
                );}
                return null;}
                )}
              </tbody>
            </table>
          </div>
      )}
       </div>
        </div>
      );

     

};

export default ContractorDashboard;