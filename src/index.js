import React from 'react';
import { render } from 'react-dom';
import App from './App';

// STEP 0a: Import createStore function from Redux
import { createStore } from 'redux'

// STEP 0b: Import Provider from React-Redux
// Provider is a React component. React-Redux connects Redux to our React application
import { Provider } from 'react-redux'

// Import our Reducer
import carReducer from './reducers/carReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

// STEP 1: Create the Redux Store
const store = createStore(
  // STEP 1a: Pass in our Reducer to createStore
  carReducer,
  // STEP 1b: Add Redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState())

const rootElement = document.getElementById('root');
render(
  // STEP 2: Wrap our app in Provider and provide the store to our app
  <Provider store={store} >
    <App />
  </Provider>,
  rootElement
);
