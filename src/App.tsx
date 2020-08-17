import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './globalStyles.scss';
import allReducers from './store/reducers';
import ProductList from './views/ProductList/ProductList';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Aside from './components/Aside/Aside';
import Filter from './components/Filter/Filter';
import Nav from './components/Nav/Nav';

const store = createStore(allReducers, composeWithDevTools(
  applyMiddleware(thunk),
));

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Header />
      <Banner />
      <main>
        <Aside>
          <Filter />
        </Aside>
        <ProductList />
      </main>
    </Provider>
  );
}

export default App;
