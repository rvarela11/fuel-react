

import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {}
  }

  componentDidMount () {
    const panels = document.querySelectorAll(".panel");

    function toggleClass (e) {
      this.classList.toggle('open');
    }

    function toggleActive (e) {
      if(e.propertyName.includes("flex")) {
        this.classList.toggle('open-active');
      };
    }

    panels.forEach(panel => {
      panel.addEventListener("click", toggleClass)
    });

    panels.forEach(panel => {
      panel.addEventListener("transitionend", toggleActive)
    });

  }

  render() {
    return <div>
      <section className="home">
          <h4>3 simple steps to a new you!</h4>
          <div className="home__start-button">
            <Link to="/step1" className="waves-effect waves-light btn">
                Start
            </Link>
          </div>

        <div className="home__steps">
          <h5>Goal</h5>
          <h5>Daily</h5>
          <h5>Results</h5>
        </div>

          <div className="home__panels">
            <div className="panels">
              <div className="panel panel1">
                <p>Your goal calories will determine how many calories you will need to consume in order to lose, maintain or gain weight.</p>
              </div>
              <div className="panel panel2">
                <p>Your daily calories will show your current eating habits.</p>
              </div>
              <div className="panel panel3">
                <p>The results will show you how close or far you are from your goal.</p>
              </div>
            </div>
          </div>

          <div className="home__panels-mobile">
            <div>
              <h4>Goal</h4>
              <i className="fa fa-calendar-check-o fa-5x" aria-hidden="true"></i>
              <h5>Your goal calories will determine how many calories you will need to consume in order to lose, maintain or gain weight.</h5>
            </div>
            <div>
              <h4>Daily</h4>
              <i className="fa fa-cutlery fa-5x" aria-hidden="true"></i>
              <h5>Your daily calories will show your current eating habits.</h5>
            </div>
            <div>
              <h4>Results</h4>
              <i className="fa fa-bar-chart fa-5x" aria-hidden="true"></i>
              <h5>The results will show you how close or far you are from your goal.</h5>
            </div>
          </div>


      </section>
    </div>
  }
}

export default Home;
