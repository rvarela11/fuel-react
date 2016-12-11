import React, { Component } from 'react';
import Logo from './logo';

export default class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        {this.props.children}
      </div>
    );
  }
}
