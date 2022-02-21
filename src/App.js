import React from 'react';
import Campaign from './components/Campaign';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Campaign.css';
import './app/SignIn.css';
import CampaignCreate from './components/CampaignCreate';
import Creative from './components/Creative';
import Edit from './components/Edit';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navibar from './components/Navibar';
import Form from './app/Form';
import LoginForm from './app/LoginForm';
import OTP from './app/OTP';
//import CampForm from './components/CampForm';


function App() {
  return (
    <div>
      
      <Router>
          <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/navi" element={<Navibar />} />
              <Route path="/campcrea" element={<Home />} />
              <Route path="/campaign" element={<CampaignCreate />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/edit" element={<Edit />} />
          </Routes>
      </Router>
    
    </div>
  );
}


export default App;
/*<Router>
          <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/navi" element={<Navibar />} />
              <Route path="/campcrea" element={<Home />} />
              <Route path="/campaign" element={<CampaignCreate />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/edit" element={<Edit />} />
          </Routes>
      </Router> */