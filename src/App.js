import React from 'react';
//import Campaign from './components/Campaign';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Campaign.css';
import './app/SignIn.css';
import  './UserProfile/profile.css';
import './fileUploads/image.css';
//import RangePicker from './components/RangePicker';
import CampaignCreate from './components/CampaignCreate';
import Creative from './components/Creative';
import Edit from './components/Edit';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CampDetails from './components/CampDetails';
import Navibar from './components/Navibar';
import Form from './app/Form';
import LoginForm from './app/LoginForm';
import OTP from './app/OTP';
import Home from './components/Home';
import AdvertiserProfile from './UserProfile/advertiserProfile';
import ChangePassword from './UserProfile/changePassword';
import './Payment/pay.css';
import BillingDetails from './Payment/billing';
import HomePage from './LandingPages/homePage';
import './LandingPages/landingNav.css';
import './LandingPages/Slider.css'
//import Table from './components/Table';
//import AdvertiserProfile from './components/AdvertiserProfile';
//import TableComponents from './components/TableComponents';
//import CampForm from './components/CampForm';
//import CampTable from './components/CampTable';

function App() {
  return (
    <div>
      
      <Router>
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/home" element={<HomePage />} /> 
              <Route path="/form" element={<Form />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/navi" element={<Navibar />} />
              <Route path="/campcrea" element={<CampDetails />} />
              <Route path="/campaign" element={<CampaignCreate />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/profile" element={<AdvertiserProfile />} />
              <Route path="/password" element={<ChangePassword />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/pay" element={<BillingDetails/>}/> 
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
      </Router>
      
      
      <Router>
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/form" element={<Form />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/navi" element={<Navibar />} />
              <Route path="/campcrea" element={<CampDetails />} />
              <Route path="/campaign" element={<CampaignCreate />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/edit" element={<Edit />} />
          </Routes>
      </Router>
      
      
      <Router>
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/form" element={<Form />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/navi" element={<Navibar />} />
              <Route path="/campcrea" element={<CampDetails />} />
              <Route path="/campaign" element={<CampaignCreate />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/edit" element={<Edit />} />
          </Routes>
      </Router>*/