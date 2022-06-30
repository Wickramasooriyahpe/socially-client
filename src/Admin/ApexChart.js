import React, {useState, useEffect} from 'react';
import CanvasJSReact from './assets/canvasjs.react';
import axios from 'axios';

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const generateDataModel = (data) => {
	let generatedData = [];
	data.map((d) => {
		generatedData.push({x:new Date(d.startDate.slice(0,4),d.startDate.slice(5,7),d.startDate.slice(8,10)), y:d.count});
	});
	return generatedData;
}
 
function ApexChart (props)  {	
	const [chartdata, setchartData] = useState([]);

	useEffect(() => {
        getData();
    }, []);

	const user = JSON.parse(localStorage.getItem('JWT'));
	const adverId = user.userId;
	console.log(adverId);

	const getData = () => {

		console.log("Camp data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        axios.get("http://localhost:3000/dashboard/graph/admin",config).then((res) =>{
        
		
       setchartData(generateDataModel(res.data));
	   console.log("CampaignsData",chartdata);
	   
		      
    }
    );
    };

	
	return <div><CanvasJSChart
	 options = {
		{
			theme: "light2",
			animationEnabled: true,
			title:{
				text: ""
				  
			},
			
		    subtitles: [{
				text: "Click Legend to Hide or Unhide Data Series"
			}],
			axisX: {
				title: "Dates"
			},
			axisY: {
				title: "Views",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD"
			},
			axisY2: {
				title: "",
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0"
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				//itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "views",
				showInLegend: true,
				/*xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 Units",*/
				dataPoints: chartdata
			},
			// {
			// 	type: "spline",
			// 	name: "Spends",
			// 	axisYType: "secondary",
			// 	showInLegend: true,
			// 	/*xValueFormatString: "MMM YYYY",
			// 	yValueFormatString: "$#,##0.#",*/
			// 	dataPoints: [
			// 		// { x: 2, y: 19034.5 },
			// 		// { x: 4, y: 20015 },
			// 		// { x: 6, y: 27342 },
			// 		// { x: 8, y: 20088 },
			// 		// { x: 10, y: 20234 },
			// 		// { x: 12, y: 29034 },
			// 		// { x: 14, y: 20487 },
			// 		// { x: 16, y: 29523 },
			// 		// { x: 18, y: 20234 },
			// 		// { x: 20, y: 27234 },
			// 		// { x: 22, y: 29548 },
			// 		// { x: 24, y: 28534 }
					
			// 	]
			// }
		]
		}
		
		
		
	}
	/></div>
			
}
 
export default ApexChart;    