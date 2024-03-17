import React from 'react';

function Bars({ data, xScale, yScale, height }) {
    return (
        <g>
            {data.map((d, index) => (
                <rect
                    key={index}
                    x={xScale(d.station)}
                    y={yScale(d.start)}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.start)}
                    fill="steelblue"
                    stroke="black"
                    strokeWidth="1"
                />
            ))}
        </g>
    );
}

export default Bars;