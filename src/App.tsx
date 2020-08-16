import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './globalStyles.scss';
import allReducers from './store/reducers';

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

function App() {
  return (
    <Provider store={store}>
      <main />
    </Provider>
  );
}

export default App;
