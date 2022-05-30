import React from 'react';
import CanvasJSReact from '../Assets/canvasjs.react'

var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SummaryChart =()=> {
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
				title: ""
			},
			axisY: {
				title: "Impressions / Earnings",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD"
			},
			axisY2: {
				title: "Spend",
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
				name: "Impressions",
				showInLegend: true,
				xValueFormatString: "DD MMM",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: new Date(2022, 0, 1), y: 12 },
					{ x: new Date(2022, 1, 15), y: 13 },
					{ x: new Date(2022, 2, 3), y: 14 },
					{ x: new Date(2022, 3, 12), y: 10 },
					{ x: new Date(2022, 4, 30), y: 9 },
					{ x: new Date(2022, 5, 12), y: 12 },
					{ x: new Date(2022, 6, 24), y: 14 }
				]
			},
			{
				type: "spline",
				name: "Spend",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "DD MMM",
				yValueFormatString: "$##0.#",
				dataPoints: [
					{ x: new Date(2022, 0, 1), y: 190 },
					{ x: new Date(2022, 1, 15), y: 200 },
					{ x: new Date(2022, 2, 3), y: 273 },
					{ x: new Date(2022, 3, 4), y: 200 },
					{ x: new Date(2022, 4, 28), y: 202 },
					{ x: new Date(2022, 5, 1), y: 290 },
					{ x: new Date(2022, 6, 1), y: 304 }
				]
			}
			,{
				type: "spline",
				name: "Conversion",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "DD MMM",
				yValueFormatString: "$##0.#",
				dataPoints: [
					{ x: new Date(2022, 0, 1), y: 159 },
					{ x: new Date(2022, 1, 5), y: 210 },
					{ x: new Date(2022, 2, 7), y: 127 },
					{ x: new Date(2022, 3, 4), y: 100 },
					{ x: new Date(2022, 4, 8), y: 186 },
					{ x: new Date(2022, 5, 10), y: 190 },
					{ x: new Date(2022, 6, 1), y: 250 }
				]}
				,{
					type: "spline",
					name: "Earnings",
					axisYType: "secondary",
					showInLegend: true,
					xValueFormatString: "DD MMM",
					yValueFormatString: "$##0.#",
					dataPoints: [
						{ x: new Date(2022, 0, 12), y: 200 },
						{ x: new Date(2022, 1, 6), y: 210 },
						{ x: new Date(2022, 2, 7), y: 150 },
						{ x: new Date(2022, 3, 14), y: 130 },
						{ x: new Date(2022, 4, 18), y: 186 },
						{ x: new Date(2022, 5, 5), y: 175 },
						{ x: new Date(2022, 6, 9), y: 260 }
					]}
		]
		}
	}
	/></div>
}
export default SummaryChart;