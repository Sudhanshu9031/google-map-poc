import React, { Component } from 'react';

import house1 from '../assets/1.jpg';
import house2 from '../assets/2.jpg';
import house3 from '../assets/3.jpg';
import house4 from '../assets/4.jpg';
class LeftSection extends Component {



    render() {
        return (
            <div className={`col-1 left-section`}>
                <div>
                    <h2>Left Section</h2>
                </div>
                <div className={`row card`}>
                    <div className={`card-img-container`}>
                        <img src={house1} className={`card-img`}/>
                    </div>
                    <div className={`card-text`}>
                        <span>Entire villa in Goa</span>
                        <h4>2BHK AC Villa near Bogmalo Beach and Airport!!</h4>
                        <span>4 guests, 2 bedrooms, 3 beds, 2 bathrooms</span>
                        <div>Text at bottom</div>
                    </div>
                </div>
                <hr className={`hr-line`} />
                <div className={`row card`}>
                    <div className={`card-img-container`}>
                        <img src={house2} className={`card-img`}/>
                    </div>
                    <div className={`card-text`}>
                        <span>Entire villa in Goa</span>
                        <h4>2BHK AC Villa near Bogmalo Beach and Airport!!</h4>
                        <span>4 guests, 2 bedrooms, 3 beds, 2 bathrooms</span>
                        <div>Text at bottom</div>
                    </div>
                </div>
                <hr className={`hr-line`} />
                <div className={`row card`}>
                    <div className={`card-img-container`}>
                        <img src={house3} className={`card-img`}/>
                    </div>
                    <div className={`card-text`}>
                        <span>Entire villa in Goa</span>
                        <h4>2BHK AC Villa near Bogmalo Beach and Airport!!</h4>
                        <span>4 guests, 2 bedrooms, 3 beds, 2 bathrooms</span>
                        <div>Text at bottom</div>
                    </div>
                </div>
                <hr className={`hr-line`} />
                <div className={`row card`}>
                    <div className={`card-img-container`}>
                        <img src={house4} className={`card-img`}/>
                    </div>
                    <div className={`card-text`}>
                        <span>Entire villa in Goa</span>
                        <h4>2BHK AC Villa near Bogmalo Beach and Airport!!</h4>
                        <span>4 guests, 2 bedrooms, 3 beds, 2 bathrooms</span>
                        <div>Text at bottom</div>
                    </div>
                </div>
                <hr className={`hr-line`} />
            </div>
            
        )
    }
}

export default LeftSection;