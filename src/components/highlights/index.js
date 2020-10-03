import Fade from 'react-reveal/Fade';
import Description  from './Description'
import React from 'react'
import Discount from './Discount'

function Highlight() {
    return (
        <div className="highlight_wrapper">
            <Description />
            <Discount/>
        </div>
    )
}

export default Highlight
