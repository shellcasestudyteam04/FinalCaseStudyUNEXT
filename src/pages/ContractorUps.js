// src/components/Login.js

import React, { useState } from 'react';
import api from './api';
//import axios from axios;
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

function ContractorUps(){
    const[user,setUser] = useState({contractorId:'',contractorName:'',conLocation:'',emailid:'',phoneNumber:'',conPassword:'',amountInvested:'',quantityGenerated:'',managerId:'',energyId:''});
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
  
      const response = await fetch('https://localhost:7022/api/Contractors',{
       
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        // body: {
        //   "energyId": 98,
        //   "typeOfEnergy": "solar",
        //   "netEnergyGenerated": 10,
        //   "totalAmountInvested": 1000
        // }
        }); 
  
   
  
        if (response.status === 200 || response.status === 201) {
  
          // Authentication successful, handle it accordingly (e.g., store tokens)
  
          console.log('Login successful');
          const successMessageElement = document.createElement('div');
          successMessageElement.innerHTML = '<p>Your data has been successfully updated. Check the performance below.</p>';
          successMessageElement.classList.add('success-message'); // You can add CSS class for styling
          const targetContainer = document.getElementById('successMessage');
          targetContainer.appendChild(successMessageElement);
  
        }
        else{
          const failMessageElement = document.createElement('div');
          failMessageElement.innerHTML = '<p>Your data has some error.</p>';
          failMessageElement.classList.add('failure-message'); // You can add CSS class for styling
          const targetContainer = document.getElementById('successMessage');
          targetContainer.appendChild(failMessageElement);
        }
  
      } catch (error) {
  
        // Handle authentication error (e.g., display error message)
  
        console.error('Login failed', error);
  
      }
  
    };
    const handleLogoutButtonClick =() => {
      history('/Menu');
    };
    const handleBackButtonClick =() => {
      history('/employeedashboard');
    };

  return (
    
    <div><div style={{ display: 'flex', justifyContent: 'space-between' }}>

    <button onClick={handleBackButtonClick} style={{ marginLeft: '20px' , backgroundColor: 'Black', color: 'white'}}>Back</button>
    </div><center>
      <h2>Enter Contractor Details</h2>
      </center>
      <form onSubmit={handleContractorUps}>
        <div>
          <label>Contractor ID: </label>
          <input
            type="number"
            value={user.contractorId}
            onChange={(e) => setUser({ ...user, contractorId: parseInt(e.target.value)})}
          />
        </div>
        <div>
          <label>Name :</label>
          <input
            type="text"
            value={user.contractorName}
            onChange={(e) => setUser({ ...user, contractorName: e.target.value })}
          />
        </div>
        <div>
          <label> Location :</label>
          <input
            type="text"
            value={user.conLocation}
            onChange={(e) => setUser({ ...user, conLocation: e.target.value})}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="text"
            value={user.emailid}
            onChange={(e) => setUser({ ...user, emailid: e.target.value})}
          />
        </div>
        <div>
          <label>Phone Number :</label>
          <input
            type="text"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value})}
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="text"
            value={user.conPassword}
            onChange={(e) => setUser({ ...user, conPassword: e.target.value})}
          />
        </div>
        <div>
          <label>Amount Invested :</label>
          <input
            type="text"
            value={user.amountInvested}
            onChange={(e) => setUser({ ...user, amountInvested: e.target.value})}
          />
        </div>
        <div>
          <label>Quantity Generated :</label>
          <input
            type="text"
            value={user.quantityGenerated}
            onChange={(e) => setUser({ ...user, quantityGenerated: e.target.value})}
          />
        </div>
        <div>
          <label>Manager Id :</label>
          <input
            type="text"
            value={user.managerId}
            onChange={(e) => setUser({ ...user, managerId: e.target.value})}
          />
        </div>
        <div>
          <label>Energy Id :</label>
          <input
            type="text"
            value={user.energyId}
            onChange={(e) => setUser({ ...user, energyId: e.target.value})}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          
        </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <button onClick={handleLogoutButtonClick} style={{ marginLeft: '1290px' , backgroundColor: 'red', color: 'white'}}>Logout</button>
          </div>
          <p id="successMessage"></p>
    </div>
  );
};

export default ContractorUps;
