
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import ButtomCompent from '../utils/Buttons'

export default class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = ()=>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart : this.state.discountStart + 1})
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{this.porcentage()}, 30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                    onReveal={()=> this.porcentage()}
                    bottom>
                    <div className="discount_porcentage">
                        <span >{this.state.discountStart}</span>
                        <span>OFF</span>
                    </div>
                    </Fade>
                   <Slide right>
                   <div className="discount_description">
                        <h3>Purchased Before</h3>
                        <p>React Reveal is an animation framework for React. It's MIT licensed, has a tiny footprint and written specifically for React in ES6. It can be used to create various cool reveal on scroll animations in your application. If you liked this package, don't forget to star the Github repository</p>
                        <ButtomCompent
                            link="google.com"
                            bck="#ffa800"
                            color="fff"
                            text="Purchase Ticket"
                        />
                    </div>
                   </Slide>
                </div>
            </div>
        )
    }
}
