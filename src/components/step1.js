import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { step1Calories } from '../actions/index';

class Step1 extends Component {

  onSubmit(props) {
    console.log(props);
    // this.props.step1Calories(props);
  }

  render() {

    const { fields: { gender, weight, height, age, active, goal }, handleSubmit } = this.props;

    return <div>
      <h3 className="topMessage">Step 1</h3>
      <div className="step1DivOutside">
        <div className="step1DivInside">
          <form onSubmit={handleSubmit (this.onSubmit.bind(this))}>
            {/* Gender */}
            <input type="radio" name="gender" value="male" {...gender}/>
            <label>Male</label>
            <input type="radio" name="gender" value="female" {...gender}/>
            <label>Female</label>
            {/* Weight/Height/Age */}
            <p/>
            <input type="number" name="weight" placeholder="Weight (lbs)" {...weight}/><p/>
            <input type="number" name="height" placeholder="Height (inches)" {...height}/><p/>
            <input type="number" name="age" placeholder="Age" {...age}/>
            {/* Active */}
            <p/>
            <input type="radio" name="active" value="1.2" {...active}/>
            <label className="fontSizeBox"><span>Sedentary:</span> Little or no exercise</label><p/>
            <input type="radio" name="active" value="1.375" {...active}/>
            <label className="fontSizeBox"> <span>Lightly Active:</span> Light exercise (1-3 days/week)</label><p/>
            <input type="radio" name="active" value="1.55" {...active}/>
            <label className="fontSizeBox"> <span>Moderately Active:</span> Moderate exercise (3-5 days/week)</label><p/>
            <input type="radio" name="active" value="1.7" {...active}/>
            <label className="fontSizeBox"> <span>Very Active:</span> Hard exercise (6-7 days/week)</label><p/>
            <input type="radio" name="active" value="1.9" {...active}/>
            <label className="fontSizeBox"> <span>Extremely Active:</span> Hard daily exercise and/or a physical job</label>
            {/* Goal */}
            <p/>
            <input type="radio" name="goal" value="lose" {...goal}/>
            <label>Lose</label><p/>
            <input type="radio" name="goal" value="maintain" {...goal}/>
            <label>Maintain</label><p/>
            <input type="radio" name="goal" value="gain" {...goal}/>
            <label>Gain</label><p/>
            {/* <Link to="/step2" className="btn btn-primary startButton">
                Submit
            </Link> */}
            <p/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  }
}

// export default Step1;

export default reduxForm ({
  form: 'Step1Form',
  fields: ['gender', 'weight', 'height', 'age', 'active', 'goal']
}, null, { step1Calories })(Step1);
