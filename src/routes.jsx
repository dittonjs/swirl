import React                                      from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App                                        from './app';
import Landing                                    from './components/landing';
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
    </Route>
  </Router>
);
