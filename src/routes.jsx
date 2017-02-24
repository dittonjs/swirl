import React                                      from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App                                        from './app';
import Landing                                    from './components/landing';
import Login                                      from './components/login';
import Leaderboard                                from './components/leaderboard/_leaderboards'
import Profile                                    from './components/profile/_profile';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/profile" component={Profile} />
    </Route>
  </Router>
);

// if you need variables in the url
// <Route path="/profile/:user_id" component={Profile} />
