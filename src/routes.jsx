import React                                      from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App                                        from './app';
import Landing                                    from './components/landing';
import Login                                      from './components/login';
import Register                                   from './components/register';
import Leaderboard                                from './components/leaderboard/_leaderboards'
import Profile                                    from './components/profile/_profile';
import BathroomEdit                               from './components/bathroomEdit/_bathroomEdit';
import BathroomReview                             from './components/bathroomReview/_bathroomReview';
import FindBathroom                               from './components/find_bathroom/find_bathroom';
import AdminControls                              from './components/admin_controls/_adminpage';
import AdminUsersView                              from './components/admin_controls/_adminUserPage';
import AdminBathroomView                          from './components/admin_controls/_adminBathroomPage';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/bathroomEdit" component={BathroomEdit} />
      <Route path="/bathroomReview" component={BathroomReview} />
      <Route path="/findBathroom" component={FindBathroom} />
      <Route path="/adminControls" component={AdminControls} />
      <Route path="/adminUserControl" component={AdminUsersView} />
      <Route path="/adminBathroomControl" component={AdminBathroomView} />
    </Route>
  </Router>
);

// if you need variables in the url
// <Route path="/profile/:user_id" component={Profile} />
