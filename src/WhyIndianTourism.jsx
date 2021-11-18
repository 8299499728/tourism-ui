import React from "react";
import TourGuide from "../src/images/tour-guide.png"
export default function WhyIndianTourism() {
    return (
        <>
        <div className="container-fluid">
            <div className="background-img">
                {/* <img src = {worldMap} className = "woldMap" alt = "woldMap"/> */}
                <h4 className = "text-center">Why Indian Tourism</h4>
                <h1 className = "text-center">Why you are travel with Indian Tourism</h1>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="icon-img">
                            <img src = {TourGuide} alt = "TourGuide"/>
                            </div>
                                <h5 className="icon-text text-light">
                                2000+ Our worldwide guide
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}