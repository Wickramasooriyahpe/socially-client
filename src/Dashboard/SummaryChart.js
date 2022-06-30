import React, {useState, useEffect}from 'react';
import CanvasJSReact from '../Assets/canvasjs.react'
import axios
 from 'axios';
import { count } from 'rsuite/esm/utils/ReactChildren';

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const generateDataModel = (data) => {
	let generatedData1 = [];
	let generatedData2 = [];
	let generatedData3 = [];
	data.map((d) => {
		generatedData1.push({x:new Date(d.startDate.slice(0,4),d.startDate.slice(5,7),d.startDate.slice(8,10)), y:d.campaignCount});
	});

	data.map((d) => {
		generatedData2.push({x:new Date(d.startDate.slice(0,4),d.startDate.slice(5,7),d.startDate.slice(8,10)), y:d.conversionCount});
	});

	data.map((d) => {
		generatedData3.push({x:new Date(d.startDate.slice(0,4),d.startDate.slice(5,7),d.startDate.slice(8,10)), y:d.creativeCount});
	});

	return{
		generatedData1,
		generatedData2,
		generatedData3
	};
	
}



function SummaryChart (props){
	const [chartdata, setchartData] = useState([]);
	const [campchartdata, setcampchartData] = useState([]);
	const [creativechartdata, setcreativechartData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

	const user = JSON.parse(localStorage.getItem('JWT'));
const adverId = user.userId;
console.log(adverId);

	const getData = () => {

		console.log("Camp data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        axios.get("http://localhost:3000/dashboard/graph/user/"+adverId ,config).then((res) =>{
        
		
       setchartData(generateDataModel(res.data).generatedData1);
	   console.log("CampaignsData",chartdata);
	   setcampchartData(generateDataModel(res.data).generatedData2);
	   setcreativechartData(generateDataModel(res.data).generatedData3);
		      
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
				text: ""
			}],
			axisX: {
				title: "Date"
			},
			axisY: {
				title: "Conversions",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD"
			},
			axisY2: {
				title: "Campaigns/Creatives",
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
			data: [
				
			{
				type: "spline",
				name: "Conversion",
				// axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "DD MMM",
				yValueFormatString: "$##0.#",
				dataPoints: chartdata
			},
			{
				type: "spline",
				name: "Campaigns",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "DD MMM",
				yValueFormatString: "$##0.#",
				dataPoints: campchartdata
			},
			{
				type: "spline",
				name: "Creatives",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "DD MMM",
				yValueFormatString: "$##0.#",
				dataPoints: creativechartdata
			}

		]
		}
	}
	/></div>
}
export default SummaryChart;


//{
				// type: "spline",
				// name: "Impressions",
				// showInLegend: true,
				// xValueFormatString: "DD MMM",
				// yValueFormatString: "#,##0",
				// dataPoints: [
				// 	// { x: new Date(2022, 0, 1), y: 12 },
				// 	// { x: new Date(2022, 1, 15), y: 13 },
				// 	// { x: new Date(2022, 2, 3), y: 14 },
				// 	// { x: new Date(2022, 3, 12), y: 10 },
				// 	// { x: new Date(2022, 4, 30), y: 9 },
				// 	// { x: new Date(2022, 5, 12), y: 12 },
				// 	// { x: new Date(2022, 6, 24), y: 14 }
				// ]
			//},
			//{
				// type: "spline",
				// name: "Spend",
				// axisYType: "secondary",
				// showInLegend: true,
				// xValueFormatString: "DD MMM",
				// yValueFormatString: "$##0.#",
				// dataPoints: [
				// 	// { x: new Date(2022, 0, 1), y: 190 },
				// 	// { x: new Date(2022, 1, 15), y: 200 },
				// 	// { x: new Date(2022, 2, 3), y: 273 },
				// 	// { x: new Date(2022, 3, 4), y: 200 },
				// 	// { x: new Date(2022, 4, 28), y: 202 },
				// 	// { x: new Date(2022, 5, 1), y: 290 },
				// 	// { x: new Date(2022, 6, 1), y: 304 }
				// ]
			//},