import React from 'react'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

function SideDrawer(props) {
    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose = {()=>props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=>console.log("Featured")}>
                    Events Starts In
                </ListItem>
                <ListItem button onClick={()=>console.log("Featured")}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={()=>console.log("Featured")}>
                    Highlights
                </ListItem>
                <ListItem button onClick={()=>console.log("Featured")}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=>console.log("LOcation")}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer
