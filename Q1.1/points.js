

import React from 'react';

function Points({ data, xScale, yScale }) {
    if (data) {
        return (
            <g>
                {data.map((d, i) => (
                    <circle
                        key={i}
                        cx={xScale(d.tripdurationS)}
                        cy={yScale(d.tripdurationE)}
                        r={5} // Radius of the points
                        fill="steelblue" // Fill color of the points
                        stroke="black" // Stroke color around the points
                        strokeWidth="1" // Stroke width around the points
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>; // Return an empty group element if there is no data
    }
}

export default Points; // Export the component for use in other files