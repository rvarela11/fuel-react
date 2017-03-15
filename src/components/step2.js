import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems, step2Calories } from '../actions/index';
import { Link } from 'react-router';

class Step2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: "",
      resultsTitle: "Breakfast",
      breakfastArray: [],
      lunchArray: [],
      dinnerArray: [],
      snackArray: [],
      dailyCalories: {
        breakfastDaily: 0,
        lunchDaily: 0,
        dinnerDaily: 0,
        snackDaily: 0
      },
      totalDailyCalories: 0
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  onFormSubmit (event){
    event.preventDefault();
    this.props.getItems(this.state.term);
    this.setState({term: ""});
  }

  // START ------------------------------------------------ Render Results List

  renderResultList(listData) {
    const itemsIdArray = listData.hits.map(item => item._id);
    const itemsArray = listData.hits.map(item => item.fields.item_name.split(" - ")[0]);
    const servingSizeArray = listData.hits.map(item => item.fields.nf_serving_size_qty);
    const servingSizeUnitArray = listData.hits.map(item => item.fields.nf_serving_size_unit);
    const caloriesArray = listData.hits.map(item => item.fields.nf_calories);
    const results = {};

  itemsArray.map((item,index) => {
    if(results.hasOwnProperty(item)){
      results[item].calories.push(caloriesArray[index]);
      results[item].serving.push(servingSizeArray[index]);
      results[item].unit.push(servingSizeUnitArray[index]);
      } else {
      results[item] = {};
      results[item].calories = [];
      results[item].serving = [];
      results[item].unit = [];
      results[item].calories.push(caloriesArray[index]);
      results[item].serving.push(servingSizeArray[index]);
      results[item].unit.push(servingSizeUnitArray[index]);
    }
  });

  const resultsNames = Object.keys(results);
  const foodItems = resultsNames.map((foodName, index) => {
    return {name: foodName, calories: results[foodName].calories[0]}
  })

    return <div>
      <div className="list-results">
        <ul>
          {foodItems.map((item) => {
            const displayInfo = `${item.name} = ${item.calories}`;
            return (
                <li key={displayInfo} onClick={()=> this.handleCheckboxChange(item)}>
                  {displayInfo}
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  }

  // END -------------------------------------------------- Render Results List
  // START ------------------------------------ Buttons to change the component

  breakfastButton () {
    this.setState({resultsTitle: "Breakfast"});
  }

  lunchButton () {
    this.setState({resultsTitle: "Lunch"});
  }

  dinnerButton () {
    this.setState({resultsTitle: "Dinner"});
  }

  snackButton () {
    this.setState({resultsTitle: "Snack"});
  }

// END --------------------------------------- Buttons to change the component
// START ----------------------------------------------- Adding Daily Calories

  handleCheckboxChange(item) {
    if (this.state.resultsTitle == "Breakfast") {
        this.setState({ breakfastArray: this.state.breakfastArray.concat([item])});
        this.breakfastSum();
        this.updateDailyCalories();
    } else if (this.state.resultsTitle == "Lunch") {
        this.setState({ lunchArray: this.state.lunchArray.concat([item])});
        this.lunchSum();
        this.updateDailyCalories();
    } else if (this.state.resultsTitle == "Dinner") {
        this.setState({ dinnerArray: this.state.dinnerArray.concat([item])});
        this.dinnerSum();
        this.updateDailyCalories();
    } else if (this.state.resultsTitle == "Snack") {
        this.setState({ snackArray: this.state.snackArray.concat([item])});
        this.snackSum();
        this.updateDailyCalories();
    }
  }

  handleCheckboxChangeUndo (index) {
    if (this.state.resultsTitle == "Breakfast") {
        const deleteArrayBreakfast = this.state.breakfastArray.splice(index,1);
        this.setState({breakfastArray: this.state.breakfastArray});
        this.breakfastSum();
        this.updateDailyCalories();
    } else if (this.state.resultsTitle == "Lunch") {
        const deleteArrayLunch = this.state.lunchArray.splice(index,1);
        this.setState({lunchArray: this.state.lunchArray});
        this.lunchSum();
        this.updateDailyCalories();
    } else if (this.state.resultsTitle == "Dinner") {
        const deleteArrayDinner = this.state.dinnerArray.splice(index,1);
        this.setState({dinnerArray: this.state.dinnerArray});
        this.dinnerSum();
        this.updateDailyCalories();
    } else if (this.state.resultsTitle == "Snack") {
        const deleteArraySnack = this.state.snackArray.splice(index,1);
        this.setState({snackArray: this.state.snackArray});
        this.snackSum();
        this.updateDailyCalories();
    }
  }

  breakfastSum() {
    let dailyCalories = this.state.dailyCalories;
    const breakfastSum = Math.round(this.state.breakfastArray.reduce((a , b) => { return a + b.calories },0));
    dailyCalories.breakfastDaily = breakfastSum;
    this.setState({dailyCalories: dailyCalories});
  }
  lunchSum() {
    let dailyCalories = this.state.dailyCalories;
    const lunchSum = Math.round(this.state.lunchArray.reduce((a , b) => { return a + b.calories },0));
    dailyCalories.lunchDaily = lunchSum;
    this.setState({dailyCalories: dailyCalories});
  }
  dinnerSum() {
    let dailyCalories = this.state.dailyCalories;
    const dinnerSum = Math.round(this.state.dinnerArray.reduce((a , b) => { return a + b.calories },0));
    dailyCalories.dinnerDaily = dinnerSum;
    this.setState({dailyCalories: dailyCalories});
  }
  snackSum() {
    let dailyCalories = this.state.dailyCalories;
    const snackSum = Math.round(this.state.snackArray.reduce((a , b) => { return a + b.calories },0));
    dailyCalories.snackDaily = snackSum;
    this.setState({dailyCalories: dailyCalories});
  }
  updateDailyCalories() {
    const dailyCalories = this.state.dailyCalories;
    const totalDailyCalories = dailyCalories.breakfastDaily + dailyCalories.lunchDaily + dailyCalories.dinnerDaily + dailyCalories.snackDaily;
    this.props.step2Calories(totalDailyCalories);
  }

  // END ------------------------------------------------ Adding Daily Calories
  // START ------------------------------------------------ Getting the Results

  renderClickedItemDiv () {
    const title = this.state.resultsTitle;

    if ( title == "Breakfast") {
      return <div>
        <h5>{title}</h5>
        <div className="list-results">
          <ul>
            {this.state.breakfastArray.map((item, index) => {
              return (
                  <li key={index} onClick={()=> this.handleCheckboxChangeUndo(index)}>
                    {item.name} = {item.calories}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
      }
    else if ( title == "Lunch") {
      return <div>
        <h5>{title}</h5>
        <div className="list-results">
          <ul>
            {this.state.lunchArray.map((item, index) => {
              return (
                  <li key={index} onClick={()=> this.handleCheckboxChangeUndo(index)}>
                    {item.name} = {item.calories}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
    }
    else if ( title == "Dinner") {
      return <div>
        <h5>{title}</h5>
        <div className="list-results">
          <ul>
            {this.state.dinnerArray.map((item, index) => {
              return (
                  <li key={index} onClick={()=> this.handleCheckboxChangeUndo(index)}>
                    {item.name} = {item.calories}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
    }
    else if ( title == "Snack") {
      return <div>
        <h5>{title}</h5>
        <div className="list-results">
          <ul>
            {this.state.snackArray.map((item, index) => {
              return (
                  <li key={index} onClick={()=> this.handleCheckboxChangeUndo(index)}>
                    {item.name} = {item.calories}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
    }
  }

  // END -------------------------------------------------- Getting the Results
  // START -------------------------------------------------------------- MAIN

  render() {

    return <div>
      <section className="step2">
        <h4>Step 2</h4>
          <form  className="step2__form-search" onSubmit={this.onFormSubmit}>
            <input onChange={this.onInputChange} type="text" name="search" placeholder="Search"/>
            <div className="step2__form-search-buttons">
              <button className="btn waves-effect waves-light" type="submit">Submit</button>
              <Link to="/step3" className="btn waves-effect waves-light finishButton">
                  Finish
              </Link>
            </div>
          </form>
          <div className="row">
            <div className="col l3 row__options-buttons">
              <button onClick={this.breakfastButton.bind(this)} className="btn-flat">Breakfast</button>
            </div>
            <div className="col l3 row__options-buttons">
              <button onClick={this.lunchButton.bind(this)} className="btn-flat">Lunch</button>
            </div>
            <div className="col l3 row__options-buttons">
              <button onClick={this.dinnerButton.bind(this)} className="btn-flat">Dinner</button>
            </div>
            <div className="col l3 row__options-buttons">
              <button onClick={this.snackButton.bind(this)} className="btn-flat">Snack</button>
            </div>
          </div>
            <div className="step2__results">
              <div className="step2__results-box">
                <h5>Results</h5>
                {this.props.list.map(this.renderResultList,this)}
              </div>
              <div className="step2__results-box">
                {this.renderClickedItemDiv()}
              </div>
            </div>
      </section>
  </div>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({getItems, step2Calories}, dispatch);
}

function mapStateToProps(state){
  return { list: state.items };
}

export default connect(mapStateToProps, mapDispatchToProps) (Step2);
