import {useState, useEffect} from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
//import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Container } from 'react-bootstrap';
// import SearchItem from './SearchItem';
// import { Input } from "antd";
// import "antd/dist/antd.css";
//import { Button, Row } from "react-bootstrap";


function CampTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

      // const getData = () => {
      //     axios("https://jsonplaceholder.typicode.com/comments").then((res) =>{
      //     console.log(res.data);
      //     setData(res.data);   
      // });

      const getData = (event) => {
        //console.log(data);
        //console.log(res.data);
        //setData(data); 
     
      var axios = require('axios');
  
      var config = {
        method: 'get',
        url: 'http://localhost:3000/campaign/1',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
       console.log(JSON.stringify(response.data));
      //  this.setState({
      //       data: response.data
      //     });
      })
      .catch(function (error) {
        console.log(error);
      });
      

  };

  // const { Search } = Input;

  // const [searchVal, setSearchVal] = useState();

  // const { filteredData, loading } = SearchItem({
  //   searchVal,
  //   retrieve: getData
  // });


      const columns=[
      {
          datafield: "",
          text: "Status",
          formatter: (cellContent, row) =>{
              return(
                  <>
                      <BootstrapSwitchButton
                          checked={false}
                          onstyle="light"
                      />
                  </>
              )
                
              
          }

      },
      {
        dataField: "campaignName",
        text: "Campaign Name",
        sort: true,
    },
    {
        dataField: "budget",
        text: "Budegt",
        sort: true,
    },
    {
        dataField: "adCategory",
        text: "Category",
        sort: true,
    },
      {
          dataField: "",
          text: "Action",
          formatter: (cellContent, row) => {
            
              return (
                <div>
                <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                <button className="btn btn-outline-primary btn-sm"><FaRegEdit /></button>
                </div>
              );
            
          }
          

      }
  ]

 


  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };

  const { SearchBar } = Search;

  return (
    <div className="container" style={{ marginTop: 50 }}>
     <ToolkitProvider
      keyField="id"
      data={data}
      columns={columns}
      search
     >
      {
       props => (
        <div>
        
         <SearchBar {...props.searchProps} />
         <hr />
         <BootstrapTable
          striped
          hover
          keyField='id'
          data={data}
          columns={columns} 
          // filter={filterFactory()}  
          selectRow={ selectRow }
          pagination={paginationFactory()} 
         
          {...props.baseProps}
         />
        </div>
       )
      }
     </ToolkitProvider>
     
    </div>
   );   
 
};

export default CampTable;