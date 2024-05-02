import React from "react"

export default function InfoCard(props) {
    const title = props.title
    const value = props.value

    return (
        <div className="info-card addBorder">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}