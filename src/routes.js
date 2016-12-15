import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/step1" component={Step1} />
    <Route path="/step2" component={Step2} />
    <Route path="/step3" component={Step3} />
  </Route>
);
