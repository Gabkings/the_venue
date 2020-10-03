import React from 'react'
import Coursel from './Coursel'
import TimeUntil from './TimeUntil'

function Featured() {
    
    return (
        <div style={{position:"relative", background: "red"}}>
            <Coursel/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <TimeUntil />
        </div>
    )
}

export default Featured
