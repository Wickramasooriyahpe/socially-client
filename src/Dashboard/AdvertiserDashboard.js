import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import { FaTrophy,FaUsers,FaMousePointer,FaMoneyBill,IoStatsChartOutline} from 'react-icons/fa';
import "./Dashboard.css";
import SummaryChart from './SummaryChart';
import RangePicker from '../components/RangePicker';
    const AdvertiserDashboard = () => {
    return (
        <div class="page-container-bg-solid page-boxed">
            <div class="page-header">
                <div class="page-header-top">
                    <div class="container-fluid">  
                      
                        <div class="top-menu" >
                            <ul class="nav navbar-nav pull-right">
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
              <div class="page-head"><br></br>
                    <div class="container-fluid"><br></br>
                      <div class="row">
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
                <div id="BidderDashboard" className="page-content-inner" data-chart="">
                    <div class="row">
                        <div class="col-sm-9">                          
                            <div class="portlet">
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
                          <div className='container'>
                            <div class="portlet portlet-card">
                            <div className="row1">
                            <div > <FaTrophy  className='icons'/></div>
                            </div>
                            <div class="portlet-bodycontent number-wins">$120</div>
                            <div class="portlet-title">Earnings</div> 
                            </div>

                            <div class="portlet portlet-card">
                            <div className="row1">
                            <div > <FaUsers  className='icons'/></div>
                            </div>
                            <div class="portlet-bodycontent number-impressions">200</div>
                            <div class="portlet-title">Impressions</div>
                            </div>

                            <div class="portlet portlet-card">
                            <div className="row1">
                            <div > <FaMousePointer className='icons'/></div>
                            </div>
                            <div class="portlet-bodycontent number-clicks">450</div>
                            <div class="portlet-title">Clicks</div>
                            </div>

                            <div class="portlet portlet-card">
                            <div className="row1">
                            <div > <FaMoneyBill className='icons'/></div>
                            </div>
                            <div class="portlet-bodycontent number-spend">$300</div>
                            <div class="portlet-title">Spend</div>
                            </div>

                            </div>
                        </div>
                    </div>
</div>
<div className='lowerContainer'>
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
                              <div class="no-data hide"><div className='topCreative-text'><h4 class="title no-border">Sorry, you have no campaign</h4><a class="btn btn-primary" target="_blank"  href="http://localhost:3000/campaign">Create campaign</a></div></div>
                            </div>
                                <div class="progress"> </div>
                            <div class="control-table-data">
                              <div class="table-responsive">
                                <table class="table table-hover hide no-border">
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
                                </table>
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
                              <div class="no-data hide"><div className='topCreative-text'><h4 class="title no-border">Sorry, you have no creatives</h4><a class="btn btn-primary" target="_blank" href="http://localhost:3000/creative">Create creative</a></div></div>
                            </div>
                            <div class="progress"></div>
                            <div class="control-table-data">
                              <div class="table-responsive">
                                <table class="table table-hover hide no-border">
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
                                  <tfoot></tfoot>            </table>
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
}

export default AdvertiserDashboard;