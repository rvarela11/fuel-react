import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logo extends Component {
  render(){
    return <div>
      <div className="logoDivOutside">
        <div className="logoDivInside">
          <div className="imageDivOutside">
            <div className="image"><h1>FUEL</h1></div>
          </div>
          <div className="outsideCaloriesDiv">
            <div className="insideCaloriesDiv">
              <h4>Goal</h4>
              <h4><strong><span className="totalCaloriesDisplayClass" id="totalCaloriesDisplayGoal">{this.props.goal}</span></strong></h4>
            </div>
            <div className="insideCaloriesDiv">
              <h4>Daily</h4>
              <h4><strong><span className="totalCaloriesDisplayClass" id="totalCaloriesDisplayDaily">{this.props.daily}</span></strong></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    goal: state.goal.goalData,
    daily: state.daily.dailyData
   };
}

export default connect(mapStateToProps)(Logo);
