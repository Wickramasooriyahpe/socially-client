import {useState, useEffect, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
//import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
//import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { FaTrashAlt } from "react-icons/fa";
//BsFillHeartFill
import { FaRegEdit } from "react-icons/fa";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { FcPlus } from "react-icons/fc";
//import { Button, Row } from "react-bootstrap";


function CampTable(props){
  const [data, setData] = useState([]);

 useEffect(() => {
  getData();
 
    }, []);
  /******************A P I INTEGRATION to  DELETE campaign**************/
    async function deleteOperation (campaignId){
      //alert(campaignId);
      console.log(campaignId);
      let result = await fetch('http://localhost:3000/campaign/' + campaignId,{
        method: 'DELETE',
        headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}
      });
      result = await result.json();
      console.log(result);
      getData();
    }
    /******************A P I INTEGRATION to  GET campaign**************/
    async function getData(){
      const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
      axios.get("http://localhost:3000/campaign",config).then((res) =>{
              
        console.log("all campaigns",res.data);
        setData(res.data);       
    }
    ).catch (err=>console.log(err))
    }
    /*********************  T A B L E *****************************/
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
      dataField: "campaignId", 
      isKey: true,
      hidden: true
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
       headerStyle: (colum, colIndex) => {
            return {textAlign: 'center' };
          },
        formatter: (cellContent, row) => {
        
            return (
              <div>              
              <button className="btn btn-outline-danger btn-sm" onClick= {()=>deleteOperation(row.campaignId)}  ><FaTrashAlt /></button>
              <Link className="btn btn-outline-primary btn-sm"   role="button"
              to={{
                pathname : '/editCamp/'+ row.campaignId ,
                
               }}
              ><FaRegEdit /></Link>
              <Link className="btn btn-outline-success btn-sm" role="button" 
               to={{
                pathname : '/creative/'+ row.campaignId ,
                
               }}>
               
               <FcPlus /></Link>
              </div>
            );         
        }
    }
]

const[value, setValue] = useState('');
const [datasource, setDataSource] = useState(data);
const [tablefilter, setTablefilter] =useState({});
const filterData = (e) =>{
  if(e.target.value != ""){
    setData(e.target.value);
    const filterTable = datasource.filter(o=>Object.keys(o).some(k=>
      String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTablefilter({...filterTable})
  } else{
    setValue(e.target.value);
    setDataSource({...datasource})
  }
}

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];


const selectRow = {
  mode: 'checkbox',
  clickToSelect: true
};

const { SearchBar } = Search;

return (
  <div className="container" style={{ marginTop: 50 }}>
     <ToolkitProvider
      keyField="campaignId"
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
          bootstrap4
          striped
          hover
          keyField='id'
          data={data}
          columns={columns} 
          // filter={filterFactory()}
          defaultSorted={defaultSorted}  
          selectRow={ selectRow }
          pagination={paginationFactory()} 
         
          {...props.baseProps}
         />
        </div>
       )
      }
     </ToolkitProvider>
     
    </div>
)



}

export default CampTable;
{/*to={{
  pathname :"/Creative/" ,
   //state:{stateParam:true}
  }} */}