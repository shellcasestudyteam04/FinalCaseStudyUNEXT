// src/components/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';
import api from './api';
import {GetDataByIdComponent} from './getonebyid';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) =>  {
    e.preventDefault();

    // try {

      const response =  api.post('/api/Login1/login1', {

        username,
        password

      }).then(res=>{
        if (res.status === 200) {

          // Authentication successful, handle it accordingly (e.g., store tokens)
          //console.log('Login successful');
          // <Router>
          //   <Switch>
          //   <Route path="/getonebyid" exact component={getonebyid} />
          //   </Switch>
          // </Router>
          history('/employeedashboard');
          //console.log('Login successful');
  
        }
      }).catch(exp=>{
        console.log("Login failed");
        const failMessageElement = document.createElement('div');
          failMessageElement.innerHTML = '<p >Invalid Username or Password !!!!!!!!!</p>';
          failMessageElement.classList.add('failure-message'); // You can add CSS class for styling
          const targetContainer = document.getElementById('successMessage');
          targetContainer.appendChild(failMessageElement);
      });

 

      // if (response.status === 200) {

      //   // Authentication successful, handle it accordingly (e.g., store tokens)
      //   //console.log('Login successful');
      //   // <Router>
      //   //   <Switch>
      //   //   <Route path="/getonebyid" exact component={getonebyid} />
      //   //   </Switch>
      //   // </Router>
      //   history('/getonebyid');
      //   //console.log('Login successful');

      // }

    // } catch (error) {

    //   // Handle authentication error (e.g., display error message)

    //   console.error('Login failed', error);

    // }

  };

  return (
    <div><center>
      <h2>Login for SHELL Employee</h2>
      </center>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p id= "successMessage" style={{color:'red'}}></p>
    </div>
  );
};

export default Login;
