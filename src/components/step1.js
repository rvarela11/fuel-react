import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { step1Calories } from '../actions/index';
import { Link } from 'react-router';

class Step1 extends Component {

  static contextTypes = {
      router: PropTypes.object
  };

  onSubmit(props) {
    let goalCalories = 0;
    if (props.gender === "male") {
      const maleInput = 66 + (6.23 * props.weight) + (12.7 * props.height) - (6.8 * props.age);
      const maleGoalCalories = Number(maleInput * props.active);
      const maleGoalCaloriesRound = Math.round(maleGoalCalories);
      goalCalories = maleGoalCaloriesRound;
    } else {
      const femaleInput = 655 + (4.35 * props.weight) + (4.7 * props.height) - (4.7 * props.age);
      const femaleGoalCalories = Number(femaleInput * props.active);
      const femaleGoalCaloriesRound = Math.round(femaleGoalCalories);
      goalCalories = femaleGoalCaloriesRound;
    }
    this.props.step1Calories(goalCalories);
    this.context.router.push('/step2');
  }

  render() {

    const { fields: { gender, weight, height, age, active, goal }, handleSubmit } = this.props;

    return <div>
      <h4 className="topMessage">Step 1</h4>
      <div className="stepDivOutside">
        <div className="stepDivInside">
          <form onSubmit={handleSubmit (this.onSubmit.bind(this))}>
            {/* Gender * */}
                <div>
                  <input id="male" type="radio" name="gender" value="male" {...gender} required/>
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input id="female" type="radio" name="gender" value="female" {...gender} required/>
                  <label htmlFor="female">Female</label>
                </div>
            {/* Weight/Height/Age */}
            <h5>Info</h5>
            <div className={`${weight.touched && weight.invalid ? 'has-danger' : ''}`}>
              <input type="number" name="weight" placeholder="Weight (lbs)" {...weight}/>
                <div className="error-message">
                  {weight.touched ? weight.error : ''}
                </div>
            </div>
            <div className={`${height.touched && height.invalid ? 'has-danger' : ''}`}>
              <input type="number" name="height" placeholder="Height (inches)" {...height}/>
                <div className="error-message">
                  {height.touched ? height.error : ''}
                </div>
            </div>
            <div className={`${age.touched && age.invalid ? 'has-danger' : ''}`}>
              <input type="number" name="age" placeholder="Age" {...age}/>
                <div className="error-message">
                  {age.touched ? age.error : ''}
                </div>
            </div>
            {/* Active */}
            <h5>Active</h5>
            <input id="sedentary" type="radio" name="active" value="1.2" {...active} required/>
            <label htmlFor="sedentary" className="fontSizeBox"><span>Sedentary:</span> Little or no exercise</label><p/>
            <input id="lightly" type="radio" name="active" value="1.375" {...active} required/>
            <label htmlFor="lightly" className="fontSizeBox"> <span>Lightly Active:</span> Light exercise (1-3 days/week)</label><p/>
            <input id="moderately" type="radio" name="active" value="1.55" {...active} required/>
            <label htmlFor="moderately" className="fontSizeBox"> <span>Moderately Active:</span> Moderate exercise (3-5 days/week)</label><p/>
            <input id="very" type="radio" name="active" value="1.7" {...active} required/>
            <label htmlFor="very" className="fontSizeBox"> <span>Very Active:</span> Hard exercise (6-7 days/week)</label><p/>
            <input id="extremely" type="radio" name="active" value="1.9" {...active} required/>
            <label htmlFor="extremely" className="fontSizeBox"> <span>Extremely Active:</span> Hard daily exercise and/or a physical job</label>
            {/* Goal */}
            <h5>Goal</h5>
            <input id="lose" type="radio" name="goal" value="lose" {...goal} required/>
            <label htmlFor="lose" >Lose</label><p/>
            <input id="maintain" type="radio" name="goal" value="maintain" {...goal} required/>
            <label htmlFor="maintain" >Maintain</label><p/>
            <input id="gain" type="radio" name="goal" value="gain" {...goal} required/>
            <label htmlFor="gain">Gain</label><p/>
            <button className="waves-effect waves-light btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  }
}

function validate(values) {
  const errors ={};

  if (!values.weight){
    errors.weight = 'Enter weight';
  }
  if (!values.height){
    errors.height = 'Enter height';
  }
  if (!values.age){
    errors.age = 'Enter age';
  }

  return errors;
}

export default reduxForm ({
  form: 'Step1Form',
  fields: ['gender', 'weight', 'height', 'age', 'active', 'goal'],
  validate
}, null, { step1Calories: step1Calories })(Step1);
