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

    const getData = () => {
        axios("http://localhost:3000/creative/camp/1").then((res) =>{
        console.log(res.data);
        setData(res.data);
        
    }
    );
    };

    const columns=[
        {
            dataField: "creativeId", 
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
              <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
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
        keyField="id" 
        data={data} 
        columns={columns}  
        pagination={paginationFactory()}
        />
    </div>
  )
}

export default CreativeTable;