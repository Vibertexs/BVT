import React from "react"
import './cardStyles.css'; // Import the CSS file


export default function TradeCard(props) {
    const pair = props.pair
    const type = props.type
    const profit = props.profit
    const backgroundColorClass = profit > 0 ? 'green-background' : 'red-background'; // Determine background color class dynamically


    return (
        /*<div className="trade-card">*/
        <div className={`trade-card addBorder ${backgroundColorClass}`}>
            <p>{pair}</p>
            <p>{type}</p>
            <p>{profit}</p>
      </div>
    )
}