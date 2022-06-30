import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import { FaTrophy,FaUsers,FaMousePointer,FaMoneyBill,IoStatsChartOutline} from 'react-icons/fa';
import "./Dashboard.css";
import SummaryChart from './SummaryChart';
import useDashboard from './useDashboard';
import CampTable from '../components/CampTable';
import CreativeTable from '../components/CreativeTable';
import DashCreativeTable from './dashCreativeTable';
import DashCampTable from './dashCampTable';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import adminGraph from '../Admin/adminGraph';

    const AdvertiserDashboard = (props) => {
      // const {id} = useParams();
      // console.log("props param table = " + id);
      const user = JSON.parse(localStorage.getItem('JWT'));
    const adverId = user.userId;
    console.log(adverId);
      const [adminData, setAdminData] = useState({  });
      useEffect(() => {
          getData();
      }, []);

      const getData = () => {
        const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        axios.get("http://localhost:3000/dashboard/user/"+adverId ,config).then((res) =>{
        
        setAdminData(res.data);



        
    }
    );
    };

      // const displayData = (props) => {
      // const {notes} = props;
      // //const {handleChange} = useDashboard(submitDash);
      // notes.map((note, index) => {
      //   console.log(note);

        return (
          <div class="page-container-bg-solid page-boxed">
            <div class="page-header">
            <div class="page-header-top">
               <div class="container-fluid">         
                  <div class="top-menu" >
                        <ul class="nav navbar-nav ">
                           <div><Navibar/></div><br></br>
                        </ul>             
                  </div>
               </div>
            </div>
      
            <div class="page-header-menu">
               <div class="container-fluid">
               </div>
            </div>
      </div>
  
            <div class="page-container">
              <div class="page-content-wrapper">
                <div class="page-head">
                      <div class="container-fluid">
                        <div class="row" id='nameRow'>
                              <div class="col-sm-8"> 
                                  <h2 class="page-head-title" title="Dashboard">Dashboard<div></div></h2>
                              </div>
                              <div class="col-sm-4">
                                {/* <div className='datePicker'>
                                  <RangePicker/>
                                </div> */}
                              </div>
                        </div>
                      </div>
                  </div>       
  
              <div class="page-content">
                  <div class="container-fluid">
                  <div className='dbContainer'>
  
                      <div class="row">
                          <div class="col-sm-9"  >                          
                              <div class="portlet" >
                              <div class="portlet-bodycontent">
                                  <div id="chartAdverts" class="chart-block">
                                  <div className="loaded-data">
                                  <div className='chart'><SummaryChart/></div>
                                   </div>
                                  </div>
                              </div>
                              </div>
                          </div>
                          <div class="col-sm-3">
                            <div className='nameCardContainer'>
                              <div class="portlet portlet-card">
                              <div className="row1">
                              <div > <FaTrophy  className='icons'/></div>
                              </div>
                              <div class="portlet-bodycontent number-wins" /*key={note._id}*/>
                                <span 
                                  type="text" 
                                  id="earnings" 
                                  name="earnings"
                                  //onChange={handleChange}
                                  >
                                    {adminData.earnings}                             
                                {/*note.content*/}
                                
                                </span>
                              </div>
                              <div class="portlet-title">Earnings</div> 
                              </div>
  
                              <div class="portlet portlet-card">
                              <div className="row1">
                              <div > <FaUsers  className='icons'/></div>
                              </div>
                              <div class="portlet-bodycontent number-impressions">
                                <span
                                  type="text" 
                                  id="impressions" 
                                  name="impressions"
                                  //onChange={handleChange}
                                > {adminData.impressions} </span></div>
                              <div class="portlet-title">Impressions</div>
                              </div>
  
                              <div class="portlet portlet-card">
                              <div className="row1">
                              <div > <FaMousePointer className='icons'/></div>
                              </div>
                              <div class="portlet-bodycontent number-clicks">
                                <span
                                  type="text" 
                                  id="clicks" 
                                  name="clicks"
                                  //onChange={handleChange}
                                >{adminData.clicks} </span></div>
                              <div class="portlet-title">Clicks</div>
                              </div>
  
                              <div class="portlet portlet-card">
                              <div className="row1">
                              <div > <FaMoneyBill className='icons'/></div>
                              </div>
                              <div class="portlet-bodycontent number-spend">
                                <span
                                  type="text" 
                                  id="spend" 
                                  name="spend"
                                  //onChange={handleChange}
                                >{adminData.spend} </span></div>
                              <div class="portlet-title">Spend</div>
                              </div>
  
                              </div>
                          </div>
                      </div>
                      </div>
  
        <div className='dbContainer'>
                          <div class="row">
                            
          <div class="col-sm-6">
              <div class="portlet">
                   <div class="portlet-title">
                     <h4 class="title uppercase"> Campaign Activity </h4>
                     <div className='toplist'>Top list</div>
                   </div>
                 <div class="portlet-bodycontent">
                    <div class="row">
                        <div class="col-xs-12">
                          <div id="topCampaigns" class="smarty-table" data-get="">
                            <div class="table-data">
                              <div class="table-data-dynamic">
                                <div class="loaded-data">
                                </div>
                                <div class="no-data hide"><div className='topCreative-text'><h4 class="title no-border"></h4></div></div>
                              </div>
                                  <div class="progress"> </div>
                              <div class="control-table-data">
                                <div class="table-responsive">
                                  {/* <table class="table table-hover hide no-border">
                                    <thead>                
                                      <tr>
                                        <th data-field="cid">#</th>
                                        <th data-field="campaign_name" data-type="call" data-get="shortName">Campaign</th>
                                        <th data-field="impressions" data-type="number">Impressions</th>
                                        <th data-field="Earnings" data-type="number">Earnings</th>
                                        <th data-field="clicks" data-type="number">Clicks</th>
                                        <th data-field="convs" data-type="number">Conversion</th>
                                        <th data-field="user_spend" data-type="number" data-digits="2" data-prefix="$">Cost</th>
                                      </tr>
                                    </thead>
                                    <tbody></tbody>
                                    <tfoot></tfoot>            
                                  </table> */}
                                  <DashCampTable />
                                </div>
                                <div class="control-table-data-info"></div>
                                <div class="loaded-data update-data"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>          
                 </div>
              </div>
           </div>
  
  
        <div class="col-sm-6">
            <div class="portlet">
                  <div class="portlet-title">
                    <h4 class="title uppercase"> Creative Activity </h4>
                    <div className='toplist'>Top list</div>
                  </div>
                 <div class="portlet-bodycontent">
                    <div class="row">
                        <div class="col-xs-12">
                          <div id="topCreative" class="smarty-table" data-get="">
                            <div class="table-data">
                              <div class="table-data-dynamic">
                                <div class="loaded-data">
                                </div>
                                <div class="no-data hide"><div className='topCreative-text'><h4 class="title no-border"></h4><Link to="/campaign" class="btn btn-primary pull-right" role="button">Create Creative</Link><br></br></div></div>
                              </div>
                              <div class="progress"></div>
                              <div class="control-table-data">
                                <div class="table-responsive">
                                  {/* <table class="table table-hover hide no-border">
                                    <thead>                
                                      <tr>
                                        <th data-field="bid">#</th>
                                        <th data-field="creative_name" data-type="call" data-get="shortName">Creative</th>
                                        <th data-field="impressions" data-type="number">Impressions</th>
                                        <th data-field="Earnings" data-type="number">Earnings</th>
                                        <th data-field="clicks" data-type="number">Clicks</th>
                                        <th data-field="convs" data-type="number">Conversion</th>
                                        <th data-field="user_spend" data-type="number" data-digits="2" data-prefix="$">Cost</th>
                                      </tr>
                                    </thead>
                                    <tbody></tbody>
                                    <tfoot></tfoot>            </table> */}
                                    <DashCreativeTable />
                                </div>
                                <div class="control-table-data-info"></div>
                                <div class="loaded-data update-data"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
     </div>
     </div>
  
                    
                  </div>
              </div>
              </div>
              </div>
             </div>       
      );

    //   })

    // }

    //     return(
    //       <>
    //       {displayData(props)}
    //       </>
          
    //     )

    
}

// function cardData(posts){
//   var values = Object.values(posts);
//   return values.map((info, idx) => {
//     return <Dashboard data ={info} key={idx} />
//   })
// }

// const user = JSON.parse(localStorage.getItem('JWT'));
//   const adverId = user.userId;
//   console.log(adverId);

// function AdvertiserDashboard() {
//   const [posts, setPosts] = useState([])
//   useEffect(() => {
//     axios
//     .get("http://localhost:3000/dashboard/user/"+adverId)
//     .then(Response => setPosts(Response.data));
//   },[])

//   return(
//     <div className="AdvertiserDashboard">
//       {JSON.stringify(posts)}
//       {cardData(posts)}
//     </div>
//   )
// }

export default AdvertiserDashboard;