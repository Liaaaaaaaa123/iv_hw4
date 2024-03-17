import React from 'react';
import Bars from './bars';
import XAxis from './xAxis';
import YAxis from './yAxis';

function BarChart({ offsetX, offsetY, data, xScale, yScale, width, height }) {
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Bars data={data} xScale={xScale} yScale={yScale} height={height} />
            <XAxis xScale={xScale} height={height} width={width} />
            <YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"} />
        </g>
    );
}

export default BarChart;