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

function AdminCampTable(props){
  const [data, setData] = useState([]);
  //const [campName, setCampName] = useState([]);

    useEffect(() => {
        getData();
 
    }, []);
  /*******A P I INTEGRATION to  DELETE campaign*****/
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

    /**********A P I Increment to approved campaign*** */
    async function updateOperation (campaignId){
        //alert(campaignId);
        console.log(campaignId);
        let result = await fetch('http://localhost:3000/campaign/' + campaignId,{
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
      axios.get("http://localhost:3000/campaign/AllCampaign",config).then((res) =>{
              
        console.log("all campaigns",res.data);
        res.data.map(c=>c.status=c.status===1?<span className='status-active'>Active</span>:<span className='status-pending'>Pending</span>);
        setData(res.data);    
        console.log(data) ; 

        
         
    }
    ).catch (err=>console.log(err))
    }

    
    /*******  T A B L E ***********/
    const columns=[
          
    {
      dataField: "campaignId", 
      isKey: true,
      hidden: true,
      headerAlign: 'center',

  },
  {
      dataField: "campaignName",
      text: "Campaign Name",
      sort: true,
      headerAlign: 'left',    
      
  },
  {
      dataField: "budget",
      text: "Budegt",
      sort: true,
      headerAlign: 'center',
  },
  {
      dataField: "adCategory",
      text: "Category",
      sort: true,
      headerAlign: 'center'
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
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {textAlign: 'center' };
          },
        formatter: (cellContent, row) => {
            console.log(row.status);
        
            return (
                  
                <div>           
                    <button className="btn btn-outline-danger btn-sm btn-space" onClick= {()=>deleteOperation(row.campaignId)}  ><FaTrashAlt /></button>
                    
                    <button className='btn btn-outline-primary btn-sm btn-space' id='submit-btn' onClick={() => updateOperation(row.campaignId)}><FaEye /></button>
                    
                    {/* {
                        row.status === 'Pending' ? <button className='btn btn-outline-primary btn-sm btn-space' id='submit-btn' onClick={() => updateOperation(row.campaignId)}><FaEye /></button>:<div></div>

                        
                    }     */}
                    
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

export default AdminCampTable;


// import {useState, useEffect, Component} from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import BootstrapTable from 'react-bootstrap-table-next';
// //import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// //import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// //import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
// import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
// import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
// import { FaTrashAlt } from "react-icons/fa";
// //BsFillHeartFill
// import { FaRegEdit } from "react-icons/fa";
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'
// import { FaEye } from "react-icons/fa";
// import AdminModel from './AdminModel';
// import { Label } from 'reactstrap';
// import { render } from '@testing-library/react';

// /*****table data mapping */ 
// const generateModel = (data) => {
// 	let generatedDataModel = [];
// 	data.map((d) => {
// 		generatedDataModel.push({campaignName:d.campaignName, budget:d.budget, adCategory:d.adCategory});
// 	});
    
// 	return generatedDataModel;
// }

// function AdminCampTable(props){
//   const [data, setData] = useState([]);
//   //const [campName, setCampName] = useState([]);

//     useEffect(() => {
//         getData();
 
//     }, []);
//   /******************A P I INTEGRATION to  DELETE campaign**************/
//     async function deleteOperation (campaignId){
//       //alert(campaignId);
//       console.log(campaignId);
//       let result = await fetch('http://localhost:3000/campaign/' + campaignId,{
//         method: 'DELETE',
//         headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}
//       });
//       result = await result.json();
//       console.log(result);
//       getData();
//     }
//     /******************A P I INTEGRATION to  GET campaign**************/
//     async function getData(){
//       const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
//       axios.get("http://localhost:3000/campaign/AllCampaign",config).then((res) =>{
              
//         console.log("all campaigns",res.data);
//         setData(res.data);    
//         console.log(data) ; 
//         // setCampName(data.campaignName);
//         // console.log("camp", campName);
         
//     }
//     ).catch (err=>console.log(err))
//     }

//     const statusType = ({ values }) => {
//         // Iterate the array and create a badge-like component
//         return (
//             <>
//                 {values.map((status, idx) => {
//                     return (
//                         <span key={idx} className={status==0?"badge badge-secondary":status==1?"badge badge-primary":"badge badge-n"}>{status}</span>
//                     );
//                 })}
//             </>
//         );
//     };
//     /*********************  T A B L E *****************************/
//     const columns=[
          
//     {
//       dataField: "campaignId", 
//       isKey: true,
//       hidden: true,
//       headerAlign: 'center',

//   },
//   {
//       dataField: "campaignName",
//       text: "Campaign Name",
//       sort: true,
//       headerAlign: 'center',    
      
//   },
//   {
//       dataField: "budget",
//       text: "Budegt",
//       sort: true,
//       headerAlign: 'center',
//   },
//   {
//       dataField: "adCategory",
//       text: "Category",
//       sort: true,
//       headerAlign: 'center'
//   },
//   {
//     dataField: "status",
//     text: "Status",
//     sort: true,
//     headerAlign: 'center',
//     Cell: ({ cell: { value } }) => <statusType values={value} />
    
    
// },
// //   {
// //     datafield: "status",
// //     text: "Status",
// //     headerAlign: 'center',
// //     render(){
// //         if(this.state.value == '0')
// //             return <Label className='lable-status'>Pending</Label>
// //         return <Label className='lable-status'>Active</Label>
// //     },
// //     formatter: (cellContent, row) =>{
// //         return(
// //             <>
                
               
// //             </>
// //         )
          
        
// //     }

// // },
//   {
//         dataField: "",
//         text: "Action",
//         headerAlign: 'center',
//        headerStyle: (colum, colIndex) => {
//             return {textAlign: 'center' };
//           },
//         formatter: (cellContent, row) => {
        
//             return (
//                 <div>  
//                     <div>           
//                         <button className="btn btn-outline-danger btn-sm btn-space" onClick= {()=>deleteOperation(row.campaignId)}  ><FaTrashAlt /></button>
                          
//                         <button className='btn btn-outline-primary btn-sm btn-space' id='submit-btn' onClick={() => getModelData()}><FaEye /></button>
//                     </div>

               
//                 </div>

//             );         
//         }
//     }
    
// ]



// const[value, setValue] = useState('');
// const [datasource, setDataSource] = useState(data);
// const [tablefilter, setTablefilter] =useState({});
// const filterData = (e) =>{
//   if(e.target.value != ""){
//     setData(e.target.value);
//     const filterTable = datasource.filter(o=>Object.keys(o).some(k=>
//       String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
//       setTablefilter({...filterTable})
//   } else{
//     setValue(e.target.value);
//     setDataSource({...datasource})
//   }
// }

// /**********Model data */
// const [model, setModel] = useState(false);

// const getModelData = () =>{
//     return setModel(true);
// } 

// const defaultSorted = [{
//   dataField: 'name',
//   order: 'desc'
// }];


// const selectRow = {
//   mode: 'checkbox',
//   clickToSelect: true
// };

// const { SearchBar } = Search;
// const MyExportCSV = (props) => {
//     const handleClick = () => {
//       props.onExport();
//     };
//     return (
//       <div>
//         <button className="btn btn-warning" onClick={ handleClick }>Export to CSV</button>
//       </div>
//     );
//   };

// return (
//     <div>
//       {
//         model === true ? <AdminModel campaignName={data.campaignName} hide={() => setModel(false)}/>: ''
//       }
        
//   <div className="container" style={{ marginTop: 50 }}>
    
//      <ToolkitProvider
//       keyField="campaignId"
//       data={data}
//       columns={columns}        
//       search
//      >
//       {
//        props => (
//         <div>
        
//          <SearchBar {...props.searchProps} />
//          <hr />
//          <MyExportCSV { ...props.csvProps } /><br></br>
//          <BootstrapTable
//           bootstrap4          
//           keyField='id'
//           data={data}
//           columns={columns} 
//           noDataIndication="Table is Empty"
//           headerClasses="header-class"
//           // filter={filterFactory()}
//           defaultSorted={defaultSorted}  
          
//           pagination={paginationFactory()} 
         
//           {...props.baseProps}
//          />
//         </div>
//        )
//       }
      
      
//      </ToolkitProvider>
    
//      </div>
    
    
       
    
//     </div>
// )



// }

// export default AdminCampTable;