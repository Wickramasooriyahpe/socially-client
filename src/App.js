import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Campaign.css';
import './app/SignIn.css';
import  './UserProfile/profile.css';
import './fileUploads/image.css';
import './Payment/pay.css';
import './LandingPages/Slider.css'
import './Admin/admin.css'

import CampaignCreate from './components/CampaignCreate';

import Campaign from './components/Campaign';
import Creative from './components/Creative';
import Edit from './components/Edit';
import CampDetails from './components/CampDetails';
import Navibar from './components/Navibar';
import Form from './app/Form';
import LoginForm from './app/LoginForm';
import OTP from './app/OTP';
import Home from './components/Home';
import AdvertiserProfile from './UserProfile/advertiserProfile';
import EditCampaign from './components/EditCampaign';
import ProfileForm from './UserProfile/profileForm';
import ChangePassword from './UserProfile/changePassword';
import BillingDetails from './Payment/billing';
import HomePage from './LandingPages/homePage';
import Advertiser from './LandingPages/AdvertiserPage';
import Publisher from './LandingPages/publisherPage';
import Contact from './LandingPages/contactUs';
import AdvertiserDashboard from './Dashboard/AdvertiserDashboard';
import ForgotPassword from './app/forgotPassword';
import ResetPassword from './app/resetPassword';
import AdminDash from './Admin/AdminDash';
import TransactionHistory from './Payment/TransactionHistory'
import Checkout from './Payment/checkout';
import DataTable from './Payment/dataTable';
import AdminChangePassword from './Admin/AdminPassword';
import AdminProfile from './Admin/AdminProfile';
import AdminCampDetails from './Admin/AdminCampDetails';
import AdminCreativeDetails from './Admin/AdminCreative';

//import Table from './components/Table';
//import AdvertiserProfile from './components/AdvertiserProfile';
//import TableComponents from './components/TableComponents';
//import CampForm from './components/CampForm';
//import CampTable from './components/CampTable';

function App(props) {
  return (
    <div>
      
      <Router>
          <Routes>
              <Route path="/" element={<HomePage  />} /> 
              <Route path="/home" element={<HomePage  />} /> 
              <Route path="/adv" element={<Advertiser />} /> 
              <Route path="/pub" element={<Publisher />} />
              <Route path="/cont" element={<Contact />} /> 
              <Route path="/form" element={<Form />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/navi" element={<Navibar />} />
              <Route path="/campcrea" element={<CampDetails />} />
              <Route path="/campaign" element={<Campaign />} />
              <Route path="/editcamp/:id" element={<EditCampaign />} />
              <Route path="/creative/:id" element={<Creative />} />
              <Route path="/profile" element={<ProfileForm />} />
              <Route path="/adminprofile" element={<AdminProfile />} />
              <Route path="/password" element={<ChangePassword />} />
              <Route path="/adminpassword" element={<AdminChangePassword />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/pay" element={<BillingDetails/>}/> 
              <Route path="/Dashboard" element={<AdvertiserDashboard />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="admindash" element={<AdminDash />}/>
              <Route path="/transactionHistory" element={<TransactionHistory />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admincamp" element={<AdminCampDetails/>} />
              <Route path="/admincreative" element={<AdminCreativeDetails/>} />



              {/* <Route path="/dataTable" element={<DataTable />} /> */}
          </Routes>
          
      </Router>
    
    </div>
  );
}


export default App;
/*<Router>
<Link to={`/Dashboard/1`}> 
          <button> +</button>
          </Link>
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