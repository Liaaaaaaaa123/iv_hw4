// `<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate





import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function XAxis({ xScale, height, width, axisLabel }) {
    const axisRef = useRef();

    useEffect(() => {
        // Decide the axis based on the scale type
        const xAxisGenerator = d3.axisBottom(xScale);
        
        // Modify the font size of ticks
        xAxisGenerator.tickFormat(d => d.toString()).tickSizeOuter(0);

        d3.select(axisRef.current).call(xAxisGenerator)
    }, [xScale, width, axisLabel]);

    if (xScale){
        return (
            <g ref={axisRef} transform={`translate(0,${height})`}>
                <text
                    style={{textAnchor: 'end', fontSize: '15px', fill: 'black'}}
                    transform={`translate(550, -10)`}>
                    {axisLabel}
                </text>
            </g>
        );
    }else{
        return<g></g>
    }
    }

export default XAxis;




