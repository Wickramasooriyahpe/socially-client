import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navibar from "../components/Navibar";
import "./pay.css";
import moment from 'moment';
import { FiDownload } from "react-icons/fi";
import { jsPDF} from "jspdf";
import "jspdf-autotable";
import logo from '../../src/logo.png'

function TransactionHistory() {
    const user = JSON.parse(localStorage.getItem('email'));
    const [item, setItem] = useState([]);
    const [idData, setIdData] = useState([]);

    useEffect(() => {
      const getItem = async () => {
        const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        const res = await fetch("http://localhost:3000/advertiser-transaction/allTrans",config);
        const getdata = await res.json();
        setItem(getdata);
         console.log(getdata);
      };
  
      getItem();

    },[]);


        async function gettransIdData (transId) {
          const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
          const res = await fetch("http://localhost:3000/advertiser-transaction/" + transId,config);
          const getdata = await res.json();
          setIdData(getdata);

        const date = moment(getdata.date).format('D MMMM YYYY hh:mm A');
        const amount = getdata.amount;
        const type = getdata.type;
        const status = getdata.status;
        const id = getdata.transId;
          const pdfGenerate =  () => {

            const doc = new jsPDF('landscape', 'px', 'a4', 'false');
            const tableColumn = ["Id", "Date Paid", "Amount", "Type", "Status"];
            const tableRows = [];
            const data=[
                id, date, amount,type, status
            ];
            tableRows.push(data);

    
            doc.autoTable(tableColumn, tableRows, { startY: 175 });
            
           doc.setFont('Helvertica', 'bold')
            
            // doc.text(60,60,'SOCIALLY')
            doc.setFont("Helvetica");
            doc.setFontSize(25);
            doc.setTextColor(10);
            doc.text(30,70,'SOCIALLY')
            doc.setFontSize(20);
            doc.text(30,110,'Transaction Statement')
            
            doc.setFont('Helvertica', 'normal')
            doc.setFontSize(15);
            doc.text(30,135,user)
            doc.text(30,155,date) //name

           // var doc= new jsPDF('landscape', 'px', 'a4', 'false');
            // doc.addImage(logo, 'PNG', 60,70,120,40)
            // doc.setFont('Helvertica', 'bold')
            
            // // doc.text(60,60,'SOCIALLY')
            // doc.setFont("Helvetica");
            // doc.setFontSize(25);
            // doc.setTextColor(10);
            // doc.text(60,90,'SOCIALLY')
            // doc.setFontSize(20);
            // doc.text(60,120,'Transaction Statement')
            
            // doc.setFont('Helvertica', 'italic')
            // doc.setFontSize(15);
            // doc.text(60,150,user)
            // doc.text(60,170,date) //name


            // doc.setFont('Helvertica', 'bold')
            // doc.setFontSize(15);
            // doc.setTextColor(15);
            // doc.text(60,210,'Transaction Id')
            // doc.text(60,240,'Date Paid')
            // doc.text(60,270,'Amount')
            // doc.text(60,300,'Type')
            // doc.text(60,330,'Status')

            
            // doc.setFont('Helvertica', 'normal')
            // doc.text(170,210,':')
            // doc.text(170,240,':')
            // doc.text(170,270,':')
            // doc.text(170,300,':')
            // doc.text(170,330,':')
            // doc.text(190,210,`${id}`)
            // doc.text(190,240,date)
            // doc.text(190,270,'Rs ')
            // doc.text(210,270,`${amount}`);
            // doc.text(190,300,type)
            // doc.text(190,330,'Amount charged')
          
            doc.save('transaction-statement.pdf')
        };
        pdfGenerate();
           console.log(getdata);
        };
    
    
  return (
    <div class="page-container-bg-solid page-boxed">
     <div><Navibar/></div>

    <div class="page-container">
        <div class="page-content-wrapper">
            <div class="page-head"><br></br>
                <div class="container-fluid"><br></br>
                <h2 class="page-head-title" title="Transaction History">Transaction History</h2>

                </div>
            </div>

            <div class="page-content">
                <div class="container-fluid">
               

                <div class="page-content-inner" id="transactionHistory">
                                <div class="portlet light">
                                <div class="portlet-title">

                                    
                                    {/* <div class="portlet-title-right-controls form-inline">
                                    <label class="right-form-control " id="label">Transaction Type: </label>
                                    <select class="form-select form-control filter-column" id="filter" data-field="type" name="">
                                        <option value="all" title="All" selected="selected">All</option>
                                        <option value="0" title="Deposit Funds">Deposit Funds</option>
                                    </select>
                                    <label class="right-form-control">Limit: </label>
                                    <input type="number" class="form-control control-limit" min="1" max="100" step="5" placeholder="limit" value="15"/>
                                    </div> */}


                                </div>
                                <div class="portlet-body">
                                    <div class="row">
                            <div class="col-xs-12">
                                <div  class="smarty-table" data-get="http://localhost:3000/advertiser-transaction/allTrans">
                                <div class="table-data">
                                    <div class="control-table-data">
                                    <div class="table-responsive">
                                        <table class="table table-hover hide">
                                        <thead>            <tr>
                                        {/* <th class="uppercase" data-field="id_transaction">ID</th> */}
                                        <th class="uppercase" id="columnData" data-field="date">Date</th>
                                        <th class="uppercase" id="columnData" data-field="balance" data-type="number" data-digits="4" data-prefix="LKR ">Amount</th>
                                        <th class="uppercase" id="columnData" data-field="type">Type</th>
                                        {/* <th class="uppercase" id="columnData" data-field="status">Status</th> */}
                                        <th class="uppercase" id="columnData" data-field="status">Statement</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                        {item.map((gettrans) => (
 
                                        <tr key={gettrans.transId}>
                                            <td id="columnData"> { moment(gettrans.date).format('D MMMM YYYY hh:mm A')}</td>
                                            <td id="columnData">{gettrans.amount}</td>
                                            <td id="columnData"> {gettrans.type}</td>
                                            {/* <td id="columnData"> {gettrans.status}</td>  */}
                                             <td><a id="columnData" 
                                              onClick={()=>gettransIdData(gettrans.transId)}
                                            > 
                                            
                                                <i id="columnicon"><FiDownload/></i></a> </td> </tr>
                                        ))} 
                                        </tbody>
                                        <tfoot></tfoot>            </table>
                                    </div>
                                    <div class="control-table-data-info"></div>
                                    <div class="loaded-data update-data"></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>      </div>
                                </div>
                            </div>

                </div>
            </div>
        </div>
    </div>
</div>

 
    
      );
    }

    export default TransactionHistory;
