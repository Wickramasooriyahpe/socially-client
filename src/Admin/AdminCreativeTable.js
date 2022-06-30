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
import { FaEye } from "react-icons/fa";
import AdminModel from './AdminModel';
import { Label } from 'reactstrap';
import { render } from '@testing-library/react';

/***table data mapping */ 
const generateModel = (data) => {
	let generatedDataModel = [];
	data.map((d) => {
		generatedDataModel.push({campaignName:d.campaignName, budget:d.budget, adCategory:d.adCategory});
	});
    
	return generatedDataModel;
}

function AdminCreativeTable(props){
  const [data, setData] = useState([]);
  //const [campName, setCampName] = useState([]);

    useEffect(() => {
        getData();
 
    }, []);
  /*******A P I INTEGRATION to  DELETE campaign*****/
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

    /**********A P I Increment to approved campaign*** */
    async function updateOperation (creativeId){
        //alert(campaignId);
        console.log(creativeId);
        let result = await fetch('http://localhost:3000/creative/' + creativeId,{
          method: 'PATCH',
          headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}
        });
        result = await result.json();
        console.log(result);
        getData();
      }

    /*******A P I INTEGRATION to  GET campaign*****/
    async function getData(){
      const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
      axios.get("http://localhost:3000/creative",config).then((res) =>{
              
        console.log("all creatives",res.data);
        res.data.map(c=>c.status=c.status===1?<span className='status-active'>Active</span>:<span className='status-pending'>Pending</span>);
        setData(res.data);    
        console.log(data) ; 

        
         
    }
    ).catch (err=>console.log(err))
    }

    
    /*******  T A B L E ***********/
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
        headerAlign: 'center',
       
    },
    {
        dataField: "destinationURL",
        text: "URL",
        sort: true,
        headerAlign: 'center',
        
    },
    {
        dataField: "costPerSale",
        text: "CPS",
        sort: true, 
        headerAlign: 'center',
        
    },
    {
        dataField: "status",
        text: "Status",
        sort: true,
        headerAlign: 'center',
        
        
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
              <button className="btn btn-outline-danger btn-sm btn-space" onClick= {()=>deleteOperation(row.creativeId)}  ><FaTrashAlt /></button>
              <button className='btn btn-outline-primary btn-sm btn-space' id='submit-btn' onClick={() => updateOperation(row.creativeId)}><FaEye /></button>
                    
                    
                    {/* {
                        row.status === 'Pending' ? <button className='btn btn-outline-primary btn-sm btn-space' id='submit-btn' onClick={() => updateOperation(row.creativeId)}><FaEye /></button>:<div></div>

                        
                    }  */}
              
              
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
const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-warning" onClick={ handleClick }>Export to CSV</button>
      </div>
    );
  };

return (
    <div>
      
        
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
         <MyExportCSV { ...props.csvProps } /><br></br>
         <BootstrapTable
          bootstrap4          
          keyField='id'
          data={data}
          columns={columns} 
          noDataIndication="Table is Empty"
          headerClasses="header-class"
          // filter={filterFactory()}
          defaultSorted={defaultSorted}  
          
          pagination={paginationFactory()} 
         
          {...props.baseProps}
         />
        </div>
       )
      }
      
      
     </ToolkitProvider>
    
     </div>
    
    
       
    
    </div>
)



}

export default AdminCreativeTable;
