import React from "react";

const viewWidth = 500;
const viewHeight = 500;

const App = () => {
    return <svg style={{border: "1px solid pink", width: viewWidth, height: viewHeight }}>
        <circle cx={viewHeight - 50} cy={viewWidth - 50} r="5" />
        <rect x={200} y={200} width={10} height={10} fill="rgb(230,230, 230)"/>
        <rect x={213} y={200} width={10} height={10} fill="rgb(230,230, 230)"/>
        <rect x={224} y={200} width={10} height={10} fill="rgb(230,230, 230)"/>
        <rect x={236} y={200} width={10} height={10} fill="rgb(230,230, 230)"/>
        <rect x={248} y={200} width={10} height={10} />
        <line x1={20} y1={viewHeight - 100} x2={150} y2={100} stroke="black" />
        <text x="20" y ="30" style={{ font: "italic 16px" }}>
            Price history of 100 randomly selected pokemon
        </text>
    </svg>;
};

export default App;