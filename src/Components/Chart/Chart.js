import "./Chart.css"
import ChartBar from "./ChartBar"
const Chart = (props) => {
    const dataPointValues = props.datapoints.map(dataPoint => dataPoint.value);
    const totalMaxvalue = Math.max(...dataPointValues);
  


return(
<div className="chart">

{
props.datapoints.map(datapoint => 
    (
        <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaxvalue} label={datapoint.label} />


    )
    
    
    )

}




</div>
);




}
export default Chart;