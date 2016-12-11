import React from 'react';


export default () => {
  return <div>
    <div className="logoDivOutside">
      <div className="logoDivInside">
        <h1>Fuel</h1>
        <div className="outsideCaloriesDiv">
          <div className="insideCaloriesDiv">
            <h3>Goal</h3>
            <h3><strong><span className="totalCaloriesDisplayClass" id="totalCaloriesDisplayGoal"></span></strong></h3>
          </div>
          <div className="insideCaloriesDiv">
            <h3>Daily</h3>
            <h3><strong><span className="totalCaloriesDisplayClass" id="totalCaloriesDisplayDaily"></span></strong></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
}
