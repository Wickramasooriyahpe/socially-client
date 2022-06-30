import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
// import { FaEye } from "react-icons/fa";
// import { FaTrashAlt } from "react-icons/fa";
// import { FaRegEdit } from "react-icons/fa";

function DashCampTable(props) {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
/******************A P I INTEGRATION to  GET creative table**************/
const user = JSON.parse(localStorage.getItem('JWT'));
const adverId = user.userId;
console.log(adverId);
    const getData = () => {
        const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        axios.get("http://localhost:3000/dashboard/admin/campaigns/"+adverId ,config).then((res) =>{
        console.log(res.data);
        setData(res.data);
        
    }
    );
    };
     /******************A P I INTEGRATION to  DELETE campaign**************/
     async function deleteOperation (creativeId){
        //alert(campaignId);
        console.log(creativeId);
        let result = await fetch('http://localhost:3000/dashboard/admin/campaigns'+adverId,{
          method: 'get',
          headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}
        });
        result = await result.json();
        console.log(result);
        getData();
      }
/*********************  T A B L E *****************************/
    const columns=[
        {
            dataField: "campaignId", 
            key : true,
            hidden: true
        },
    {
        dataField: "campaign",
        text: "Campaign Name",
        sort: true,
        
    },
    {
        dataField: "impressions",
        text: "Impressions",
        sort: true,
       
    },
    {
        dataField: "conversion",
        text: "Conversions",
        sort: true,
        
    },
    {
        dataField: "budget",
        text: "Budget",
        sort: true, align: 'left',
        
    },
    
   
    // {
    //     dataField: "",
    //     text: "Action",
    //     headerStyle: (colum, colIndex) => {
    //         return {textAlign: 'center' };
    //       },
    //     formatter: (cellContent, row) => {
          
    //         return (
    //           <div>
    //           <button className="btn btn-outline-success btn-sm" ><FaEye /></button>
    //           <button className="btn btn-outline-danger btn-sm" onClick= {()=>deleteOperation(row.creativeId)}><FaTrashAlt /></button>
    //           <Link className="btn btn-outline-primary btn-sm"  to={{
    //             pathname : '/edit/'+ row.creativeId ,
                
    //            }}
    //            role='button'><FaRegEdit /></Link>
    //           </div>
    //         );
          
    //     }
    
    // }
]



  return (
    <div>
        <BootstrapTable 
        bootstrap4 
        keyField="campaignId" 
        data={data} 
        columns={columns}  
        pagination={paginationFactory()}
        noDataIndication="Table is Empty"
        />
    </div>
  )
}

export default DashCampTable;