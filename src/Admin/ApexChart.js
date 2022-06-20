import React from 'react';
import CanvasJSReact from './assets/canvasjs.react';

var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ApexChart extends Component {	
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
				text: "Daily Ads views VS Ads spend"
				  
			},
			
		    subtitles: [{
				text: "Click Legend to Hide or Unhide Data Series"
			}],
			axisX: {
				title: "Day(hours)"
			},
			axisY: {
				title: "Views",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD"
			},
			axisY2: {
				title: "Spends",
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
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "views",
				showInLegend: true,
				/*xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 Units",*/
				dataPoints: [
					{ x: 2, y: 120 },
					{ x: 4, y: 135 },
					{ x: 6, y: 220 },
					{ x: 8, y: 103 },
					{ x: 10, y: 93 },
					{ x: 12, y: 150 },
					{ x: 14, y: 143 },
					{ x: 16, y: 156 },
					{ x: 18, y: 122 },
					{ x: 20, y: 106 },
					{ x: 22, y: 137 },
					{ x: 24, y: 180 }
					
				]
			},
			{
				type: "spline",
				name: "Spends",
				axisYType: "secondary",
				showInLegend: true,
				/*xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.#",*/
				dataPoints: [
					{ x: 2, y: 19034.5 },
					{ x: 4, y: 20015 },
					{ x: 6, y: 27342 },
					{ x: 8, y: 20088 },
					{ x: 10, y: 20234 },
					{ x: 12, y: 29034 },
					{ x: 14, y: 20487 },
					{ x: 16, y: 29523 },
					{ x: 18, y: 20234 },
					{ x: 20, y: 27234 },
					{ x: 22, y: 29548 },
					{ x: 24, y: 28534 }
					
				]
			}]
		}
		
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
			
}
 
export default ApexChart;    