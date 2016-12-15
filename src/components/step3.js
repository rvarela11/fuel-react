import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step3 extends Component {

  netSum () {
    const goal = this.props.goal;
    const daily = this.props.daily;

    if (goal > daily ) {
      return <div>
        - {goal - daily}
      </div>
    } else if (goal < daily ) {
      return <div>
        + {daily - goal}
      </div>
    } else if (goal == daily) {
      return <div>
        {goal - daily}
      </div>
    }
  }

  render(){
    return <div>
      <h4 className="topMessage">Step 3</h4>
      <table className="step3Table">
        <thead>
          <tr>
           <th>Name</th>
           <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goal</td>
             <td>{this.props.goal}</td>
          </tr>
          <tr>
            <td>Daily</td>
            <td>{this.props.daily}</td>
          </tr>
          <tr>
            <td>Net</td>
            <td>{this.netSum()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    goal: state.goal.goalData,
    daily: state.daily.dailyData
   };
}

export default connect(mapStateToProps)(Step3);
