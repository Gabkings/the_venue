import React from 'react'
// import calender from '../../resources/images/icons/calender.png'
import location from '../../resources/images/icons/location.png'
// import calender from '../../resources/images/icons/calender'

import calender from '../../resources/images/icons/calendar.png'
import RubberBand from 'react-reveal/RubberBand';



function VenueNFO() {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <RubberBand>
                <div className="vn_wrapper">
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red">
                                </div>
                                <div className="vn_icon"
                                        style={{background: `url(${calender})`}}
                                    >
                                </div>
                                <div className="vn_title">
                                    Event Start Date & Time
                                </div>
                                <div className="vn_desc">
                                    You are Welcome
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow">
                                </div>
                                <div className="vn_icon"
                                        style={{background: `url(${location})`}}
                                    >
                                </div>
                                <div className="vn_title">
                                    Desert Rose , Voi
                                </div>
                                <div className="vn_desc">
                                    Drints Will be Offered Free
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </RubberBand>
            </div>
            
        </div>
    )
}

export default VenueNFO
