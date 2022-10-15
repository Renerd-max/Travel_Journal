import React from "react"

export default function Journal(props) {
    return(
        <>
        <div className="main-grid">
            <img className="cover" src={`./images/${props.display}`} alt={`a cover image of ${props.name}`} />
            
            <div className="infos">
            <div className="location">
                <img src="./images/location.png" />
                <p>{props.location}</p>
                <a target="_blank" href={props.googleLink}>View on Google Maps</a>
            </div>

            <div className="name">
                <h1>{props.name}</h1>
            </div>

            <div className="date">
                <p>{props.dateFrom} - {props.dateTo}</p>
            </div>

            <div className="info">
                <p>{props.description}</p>
            </div>
            </div>
        </div>

        <hr></hr>
        </>
    )
}