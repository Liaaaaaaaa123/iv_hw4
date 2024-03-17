

import React from 'react';

function Bars({ data, xScale, yScale, height,selectedStation, setSelectedStation }) {

    const getColor = (selectedStation, station) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };

    const handleMouseEnter = (station) => {
        setSelectedStation(station);
    };

    const handleMouseOut = () => {
        setSelectedStation(null);
    };

    if (data){
        return (
            <g>
                {data.map((d, index) => (
                    <rect
                        key={index}
                        x={xScale(d.station)}
                        y={yScale(d.start)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        fill={getColor(selectedStation, d)}
                        stroke="black"
                        strokeWidth="1"
                        onMouseEnter={() => handleMouseEnter(d)}
                        onMouseOut={handleMouseOut}
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>
    }


}

export default Bars;
