import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import createStore function from Redux
import { createStore } from 'redux'

// We need our Provider from React-Redux
// Provider is a React component. React-Redux connects Redux to our React application.
import { Provider } from 'react-redux'

// Import our Reducer
import carReducer from './reducers/carReducer'

import 'bulma/css/bulma.css';
import './styles.scss';


// Step 1: Create Store
const store = createStore(
  // Step1a: Pass in our Reducer to createStore
  carReducer,
  // Step 1b: Add dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())


const rootElement = document.getElementById('root');
ReactDOM.render(
  // Step 2: Wrap our app in Provider and pass in our Redux Store as a prop
  <Provider store={store} >
    <App />
  </Provider>,
  rootElement
);
