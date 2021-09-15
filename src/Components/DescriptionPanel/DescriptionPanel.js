import React from "react";
import './DescriptionPanel.scss'

export default function DescriptionPanel({ client }) {

    const renderClient = () => {
        const { selectedProfile, description, address, city, state, index } = client
        return <div className='row'>
            <div className='col'>
                <ul>
                    <li>Selected profile: </li>
                    <li>Desctiption: </li>
                    <li>Address: </li>
                    <li>City: </li>
                    <li>State: </li>
                    <li>Index: </li>
                </ul>
            </div>
            <div className='col'>
                <ul>
                    <li>{selectedProfile}</li>
                    <li>{description}</li>
                    <li>{address}</li>
                    <li>{city}</li>
                    <li>{state}</li>
                    <li>{index}</li>
                </ul>
            </div>
        </div>
    }

    return (
        <div className='description-panel'>
            <h3>Profile info:</h3>
            {renderClient()}
        </div>
    )
}