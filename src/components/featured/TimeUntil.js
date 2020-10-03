import React, { Component } from 'react'

import Slide from 'react-reveal/Slide';

export default class TimeUntil extends Component {
    state = {
        deadLine: "Jan, 12, 2021",
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0"
    }
    
    getDatesUntil(){
        const time = Date.parse(this.state.deadLine) - Date.parse(new Date())
        if(time < 0){
            console.log("Deadline Passed")
        }else{
            const seconds = Math.floor((time/1000)%60)
            const hours = Math.floor(time/(1000*60*60)%24)
            const minutes = Math.floor((time/(1000/60))%60)
            const days = Math.floor(time/(1000*60*60*24))

            this.setState({
                hours,
                days,
                minutes,
                seconds
            })
        }
    }

    componentDidMount(){
        setInterval(()=>this.getDatesUntil(), 1000)
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event Starts In
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            123
                        </div>
                        <div className="countdown_tag"> 
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                    <div className="countdown_time">
                        {this.state.days}
                    </div>
                    <div className="countdown_tag"> 
                    {this.state.hours}
                    </div>
                </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                        {this.state.minutes}
                    </div>
                    <div className="countdown_tag"> 
                        Min
                    </div>
                </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.seconds}
                    </div>
                    <div className="countdown_tag"> 
                        Sec
                    </div>
                </div>
                </div>
            </div>
            </Slide>
        )
    }
}
