



import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  const containerStyle = {
    backgroundColor: "#FFC107", 
    color: "#000", 
  };

  const counterItemStyle = {
    borderRight: "2px solid #000",
    padding: "20px",
    textAlign: "center",
  };

  const lastCounterItemStyle = {
    padding: "20px",
    textAlign: "center",
  };

  const numberStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
  };

  const plusStyle = {
    fontSize: "1.5rem",
  };

  const textStyle = {
    fontSize: "1.1rem",
    marginTop: "10px",
  };

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container-fluid px-5 mt-5" style={containerStyle}>
          <div className="row">
            <div className="col-md-3 my-5" style={counterItemStyle}>
              <div>
                <h1 className="text-dark" style={numberStyle}>
                  <span className="counter-value">
                    {counterOn && <CountUp start={0} end={5000} duration={2} delay={0} />}
                  </span>
                  <span style={plusStyle}>+</span>
                </h1>
                <p className="text-dark" style={textStyle}>
                  NUMBER OF CLIENTS
                </p>
              </div>
            </div>
            <div className="col-md-3 my-5" style={counterItemStyle}>
              <div>
                <h1 className="text-dark" style={numberStyle}>
                  <span className="counter-value">
                    {counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}
                  </span>
                  <span style={plusStyle}>+</span>
                </h1>
                <p className="text-dark" style={textStyle}>
                  TYPE OF INDUSTRIES
                </p>
              </div>
            </div>
            <div className="col-md-3 my-5" style={counterItemStyle}>
              <div>
                <h1 className="text-dark" style={numberStyle}>
                  <span className="counter-value">
                    {counterOn && <CountUp start={0} end={5} duration={3} delay={0} />}
                  </span>
                  <span style={plusStyle}>+</span>
                </h1>
                <p className="text-dark" style={textStyle}>
                  COUNTRY COVERAGE
                </p>
              </div>
            </div>
            <div className="col-md-3 my-5" style={lastCounterItemStyle}>
              <div>
                <h1 className="text-dark" style={numberStyle}>
                  <span className="counter-value">
                    {counterOn && <CountUp start={0} end={300} duration={2} delay={0} />}
                  </span>
                  <span style={plusStyle}>+</span>
                </h1>
                <p className="text-dark" style={textStyle}>
                  STARTUPS BUILT
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Counter;


