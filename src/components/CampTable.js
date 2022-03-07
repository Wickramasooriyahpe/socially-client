import {useState, useEffect} from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
//import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
//import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Container } from 'react-bootstrap';
//import { Button, Row } from "react-bootstrap";


function CampTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios("https://jsonplaceholder.typicode.com/comments").then((res) =>{
        console.log(res.data);
        setData(res.data);
       
    });

    

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
        dataField: "email",
        text: "Email",
        sort: true,
    },
    {
        dataField: "postId",
        text: "Product ID",
        sort: true,
    },
    {
        dataField: "name",
        text: "Name",
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



return (
  <div>
    <div className="input-group mb-3">
      <input type="search" class="form-control" placeholder="search..." arial-lable="search" onChange={filterData} value={value}/>
    </div>
   
      <BootstrapTable 
      bootstrap4 
      keyField="id" 
      data={data} 
      columns={columns}        
      pagination={paginationFactory()}/>
      
  </div>
)
}

export default CampTable;


/*const { SearchBar } = Search;

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
        pagination={paginationFactory()} 
       
        {...props.baseProps}
       />
      </div>
     )
    }
   </ToolkitProvider>
   
  </div>
 );*/    
       




          
  /*return (
    <div>
       
        <BootstrapTable 
        bootstrap4 
        keyField="id" 
        data={data} 
        columns={columns}        
        pagination={paginationFactory()}/>
        
    </div>
  )
}*/



//<BootstrapTable bootstrap4 keyField="id" data={data} columns={columns} striped hover condensed pagination={paginationFactory()}/>
/*Pagination
const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });*/

  //SEARCH BAR
  //const { SearchBar, ClearSearchButton } = Search;
/*<ToolkitProvider
        bootstrap4
        keyField='id'
        data={data}
        columns={columns}
        search
      >
        {
          props => (
            <div>
              <h6>Input something at below input field:</h6>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                
                pagination={paginationFactory()}
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>*/

      /*<div>
     <input type="text" value={this.state.value} onChange={onchangeHandler} placeholder="Search for..." stile={{float:'left', width:'20%', marginBottom:10, borderColor:'#000'}}/>
      <BootstrapTable 
      bootstrap4 
      keyField="id" 
      data={data} 
      columns={columns}        
      pagination={paginationFactory()}/>
      
  </div>*/