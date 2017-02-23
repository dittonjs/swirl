import React                                      from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App                                        from './app';
import Landing                                    from './components/landing';
import Login                                      from './components/login';
import Leaderboard                                from './components/leaderboard/_leaderboards'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/leaderboard" component={Leaderboard} />
    </Route>
  </Router>
);
