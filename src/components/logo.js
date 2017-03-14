import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logo extends Component {
  render(){
    return <div>
        <header>
          <h1>FUEL</h1>
          <div className="calories">
            <div>
              <h4>Goal</h4>
              <h4><strong><span id="totalCaloriesDisplayGoal">{this.props.goal}</span></strong></h4>
            </div>
            <div>
              <h4>Daily</h4>
              <h4><strong><span id="totalCaloriesDisplayDaily">{this.props.daily}</span></strong></h4>
            </div>
          </div>
        </header>
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
