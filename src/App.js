import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"; // Import the Login component
import ContractorUps from './pages/ContractorUps';
import Employeedashboard from './pages/employeedashboard';
import ContractorDashboard from './pages/ContractorDashboard';
import Login1 from "./pages/login1";
//import Bio from "./pages/bio";
import Bio from "./pages/Bio";
import Hydro from "./pages/hydro";
import Wind from "./pages/wind";
import Solar from "./pages/solar";
import {GetDataComponent} from './pages/Energyget';
import {GetDataByIdComponent} from './pages/getonebyid';
//import api from './pages/api';    
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function LayoutWithNavbar({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/login" exact element={<Login/>} /> {/* Add this route */}
          <Route path="/contractorUps" exact element={<ContractorUps/>} />
          <Route path = "/login1" exact element= { <Login1/> }/>
          <Route path="/energyget" exact element={<GetDataComponent/>} />
          <Route path="/getonebyid" exact element={<GetDataByIdComponent/>} />
          <Route path="/employeedashboard" exact element={<Employeedashboard/>} />
          <Route path="/contractordashboard" exact element={<ContractorDashboard/>} />
          <Route path = "/bio" exact element= { <Bio/> }/>
          <Route path = "/hydro" exact element= { <Hydro/> }/>
          <Route path = "/wind" exact element= { <Wind/> }/>
          <Route path = "/solar" exact element= { <Solar/> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;