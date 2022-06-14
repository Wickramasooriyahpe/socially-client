import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import Creative from './Creative';



function CreativeTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
/******************A P I INTEGRATION to  GET creative table**************/
    const getData = () => {
        const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        axios.get("http://localhost:3000/creative",config).then((res) =>{
        console.log(res.data);
        setData(res.data);
        
    }
    );
    };
     /******************A P I INTEGRATION to  DELETE campaign**************/
     async function deleteOperation (creativeId){
        //alert(campaignId);
        console.log(creativeId);
        let result = await fetch('http://localhost:3000/creative/' + creativeId,{
          method: 'DELETE',
          headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}
        });
        result = await result.json();
        console.log(result);
        getData();
      }
/*********************  T A B L E *****************************/
    const columns=[
        {
            dataField: "creativeId", 
            key : true,
            hidden: true
        },
    {
        dataField: "creativeHeading",
        text: "Heading",
        sort: true,
       
    },
    {
        dataField: "destinationURL",
        text: "URL",
        sort: true,
        
    },
    {
        dataField: " costPerSale",
        text: "CPS",
        sort: true, align: 'left',
        
    },
    {
        dataField: "",
        text: "Action",
        headerStyle: (colum, colIndex) => {
            return {textAlign: 'center' };
          },
        formatter: (cellContent, row) => {
          
            return (
              <div>
              <button className="btn btn-outline-success btn-sm" ><FaEye /></button>
              <button className="btn btn-outline-danger btn-sm" onClick= {()=>deleteOperation(row.creativeId)}><FaTrashAlt /></button>
              <Link className="btn btn-outline-primary btn-sm" to={'/edit'} role='button'><FaRegEdit /></Link>
              </div>
            );
          
        }
    
    }
]



  return (
    <div>
        <BootstrapTable 
        bootstrap4 
        keyField="creativeId" 
        data={data} 
        columns={columns}  
        pagination={paginationFactory()}
        />
    </div>
  )
}

export default CreativeTable;