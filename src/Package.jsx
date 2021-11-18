import React from "react";
import packageimg1 from '../src/images/package-img1.png';
import packageimg2 from '../src/images/package-img2.png';
import packageimg3 from '../src/images/package-img3.png';
import packageimg4 from '../src/images/package-img4.png';
import packageimg5 from '../src/images/package-img5.png';
import packageimg6 from '../src/images/package-img6.png';
// import banner from '../src/images/banner.png';
export default function Package() {
    return (
        <>
        <div className="packageDiv">
        <div className="container-fluid">
                <div className="col-10 mx-auto">
                    <h3 className = "choosePackage text-center">
                    Choose Your Package
                    </h3>
                    <h1 className = "selectPackage text-center">
                    Select Your best Package For Your Travel
                    </h1>
            <div className="packageRow">
            <div className="row">
                    <div className="col-4 mx-auto">
                            <div className="imgDiv">
                        <img src = {packageimg1} className = "img-fluid"  width= "424px" alt = "banner"/>
                        </div>
                        <div className="prices">
                            <span><h5>$180/person</h5></span>
                            <span className = "days-plan"><h5>5 Days/6 night</h5></span>
                        </div>
                </div>
                <div className="col-4 mx-auto">
                            <div className="imgDiv">
                        <img src = {packageimg2} className = "img-fluid" width= "424px" alt = "banner"/>
                        </div>
                        <div className="prices">
                            <span><h5>$180/person</h5></span>
                            <span className = "days-plan"><h5>5 Days/6 night</h5></span>
                        </div>
                </div>
                <div className="col-4 mx-auto">
                            <div className="imgDiv">
                        <img src = {packageimg3} className = "img-fluid" width= "424px" alt = "banner"/>
                        </div>
                        <div className="prices">
                            <span><h5>$180/person</h5></span>
                            <span className = "days-plan"><h5>5 Days/6 night</h5></span>
                        </div>
                </div>
            </div>
            </div>
            <div className="packageRow">
            <div className="row">
                    <div className="col-4 mx-auto">
                            <div className="imgDiv">
                        <img src = {packageimg4} className = "img-fluid" width= "424px" alt = "banner"/>
                        </div>
                        <div className="prices">
                            <span><h5>$180/person</h5></span>
                            <span className = "days-plan"><h5>5 Days/6 night</h5></span>
                        </div>
                </div>
                <div className="col-4 mx-auto">
                            <div className="imgDiv">
                        <img src = {packageimg5} className = "img-fluid" width= "424px" alt = "banner"/>
                        </div>
                        <div className="prices">
                            <span><h5>$180/person</h5></span>
                            <span className = "days-plan"><h5>5 Days/6 night</h5></span>
                        </div>
                </div>
                <div className="col-4 mx-auto">
                            <div className="imgDiv">
                        <img src = {packageimg6} className = "img-fluid" width= "424px" alt = "banner"/>
                        </div>
                        <div className="prices">
                            <span><h5>$180/person</h5></span>
                            <span className = "days-plan"><h5>5 Days/6 night</h5></span>
                        </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
    
}