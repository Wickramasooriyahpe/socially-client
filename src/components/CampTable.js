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


function CampTable(){


  //console.log(currentUser);
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        const config ={ headers: {"Authorization" : `Bearer`+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        axios.get("http://localhost:3000/campaign",config).then((res) =>{
          
        console.log("all campaigns",res.data);
        setData(res.data);       
}
);
};
    
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
              <button className="btn btn-outline-danger btn-sm"  ><FaTrashAlt /></button>
              <Link className="btn btn-outline-primary btn-sm"  to={'/edit/'} role="button" ><FaRegEdit /></Link>
              <Link className="btn btn-outline-success btn-sm" role="button" to='/Creative'><FcPlus /></Link>
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