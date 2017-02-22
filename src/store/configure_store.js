import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer                               from '../reducers';

const middleware = [];

let enhancers = [
  applyMiddleware(...middleware),
];


export default function(initialState) {
  const store = compose(...enhancers)(createStore)(rootReducer, initialState);
  return store;
}
