import React from 'react';
import { Link } from 'react-router';

export default () => {
  return <div>
    <h4 className="topMessage">3 simple steps to know if you are eating the right amount of calories</h4>
    <div className="buttonDivHome">
      <Link to="/step1" className="waves-effect waves-light btn">
          Start
      </Link>
    </div>
    <div className="row">
      <div className="col l4 stepsDivBox">
        <h4>Step 1</h4>
        <i className="fa fa-calendar-check-o fa-5x" aria-hidden="true"></i>
        <h5>Goal</h5>
      </div>
      <div className="col l4 stepsDivBox">
        <h4>Step 2</h4>
        <i className="fa fa-cutlery fa-5x" aria-hidden="true"></i>
        <h5>Daily</h5>
      </div>
      <div className="col l4 stepsDivBox">
        <h4>Step 3</h4>
        <i className="fa fa-bar-chart fa-5x" aria-hidden="true"></i>
        <h5>Results</h5>
      </div>
    </div>
  </div>
}
