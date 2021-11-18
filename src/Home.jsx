import React from "react";
import Navbar from "./Navbar";
import SimpleSlider from "./SimpleSlider";
import Form from "./Form";
import Package from "./Package";
import WhyIndianTourism from "./WhyIndianTourism";
export default function Home() {
    return (
        <>
        <Navbar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-auto">
                    <SimpleSlider/>
                    <Form/>
                    <Package/>
                    <WhyIndianTourism/>
                </div>
            </div>
        </div>
        </>
    );
}