import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Step1 from './components/step1';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/step1" component={Step1} />
  </Route>
);
