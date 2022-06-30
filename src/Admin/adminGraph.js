import React, { Component } from 'react'  

import axios from 'axios';  

import { Line } from 'react-chartjs-2';

export class Linecharts extends Component {
    constructor(props) {          
        super(props);          
        this.state = { Data: {} };          
    }

    componentDidMount() {        
        axios.get('http://localhost:3000/dashboard/graph/admin')         
            .then(res => {          
            console.log(res);         
            const ipl = res.data;         
            let playername = [];         
            let runscore = [];  
            ipl.forEach(record => {  
                playername.push(record.Playername);  
                runscore.push(record.Runscore);  
            });  
        
            this.setState({  
        
                Data: {  
                    labels: playername,
                    data: runscore,  
                    backgroundColor: [
                        "#3cb371",
                        "#0000FF",
                        "#9966FF",
                        "#4C4CFF",
                        "#00FFFF",
                        "#f990a7",
                        "#aad2ed",
                        "#FF00FF",
                        "Blue",
                        "Red"
                    ]

                }  
        
            });  
        
        })  
        
    }  
        
    render() {  
        
        return (  
                <div>  
                    <Line  
                        data={this.state.Data}  
                        options={{ maintainAspectRatio: false }} />  
                </div>  
        )  
       
    }  
        
}  
        
          
        
export default Linecharts  



// import React from 'react';
// import {Line} from 'react-chartjs-2';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Dataset of Months',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };
