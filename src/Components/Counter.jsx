


import React, { useState } from "react";
import "./Navbar.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
    const [counterOn, setcounterOn] = useState(false);
    return (
        <>
            <ScrollTrigger
                onEnter={() => setcounterOn(true)}
                onExit={() => setcounterOn(false)}
            >
                

                <div className="container-fluid px-5  mt-5">
                    <div className="row bg-info ">
                        
                        <div className="col-md-3 my-5">
                            <div  ><h1 className="text-dark ms-5 ps-3">
                                <span className="counter-value">
                                    {counterOn && (
                                        <CountUp start={0} end={5000} duration={2} delay={0} />
                                    )}
                                </span>
                                <span style={{ fontSize: "20px" }}>+</span></h1>
                                <p className="text-dark d-flex justify-content-center align-item-center ">NUMBER OF CLIENTS</p></div>
                        </div>
                        <div className="col-md-3 my-5">
                            <div  ><h1 className="text-dark ms-5 ps-3"><span className="counter-value">
                                {counterOn && (
                                    <CountUp start={0} end={500} duration={2} delay={0} />
                                )}
                            </span> <span style={{ fontSize: "20px" }}>+</span></h1>
                                <p className="text-dark d-flex justify-content-center align-item-center ">TYPE OF INDUSTRIES
                                </p></div>
                        </div>
                        <div className="col-md-3 my-5">
                            <div  ><h1 className="text-dark ms-5 ps-3"><span className="counter-value">
                                {counterOn && (
                                    <CountUp start={0} end={5} duration={3} delay={0} />
                                )}
                            </span><span style={{ fontSize: "20px" }}>+</span></h1>
                                <p className="text-dark d-flex justify-content-center align-item-center ">COUNTRY COVERAGE</p></div>
                        </div>
                        <div className="col-md-3 my-5">
                            <div  ><h1 className="text-dark ms-5 ps-3"><span className="counter-value">
                                {counterOn && (
                                    <CountUp start={0} end={300} duration={2} delay={0} />
                                )}
                            </span> <span style={{ fontSize: "20px" }}>+</span></h1>
                                <p className="text-dark d-flex justify-content-center align-item-center ">STARTUPS BUILT</p></div>
                        </div>


                    </div>
                    <div className="counter"></div>
                    
                </div>
            </ScrollTrigger>
        </>
    );
};

export default Counter;

