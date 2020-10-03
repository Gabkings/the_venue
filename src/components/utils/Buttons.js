import Button  from '@material-ui/core/Button'
import React from 'react'



import ticket from '../../resources/images/icons/ticket.png'

const ButtomCompent = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style={{background: props.bck, color:props.color}}
        >
            <img src={ticket} className="iconImage" alt="image" />
            {props.text}
        </Button>
    )
}

export default ButtomCompent
