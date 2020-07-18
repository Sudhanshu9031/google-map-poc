import React, { Component } from 'react';
import LeftSection from './leftSection';
import GoogleMap from './googleMap';

class MainSection extends Component {


    componentDidMount() {
        console.log("Main Section did mount");
    }

    render() {
        return (
            <div className={`row`}>
                <LeftSection />
                <GoogleMap />
            </div>
        )
    }
}

export default MainSection;