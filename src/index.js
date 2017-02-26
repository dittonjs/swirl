import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Provider }             from 'react-redux';
import configureStore           from './store/configure_store';
import routes                   from './routes';

function Root(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <div>
        {routes}
      </div>
    </Provider>
  );
}
const store = configureStore({settings: window.DEFAULT_SETTINGS});
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
