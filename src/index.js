import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import createStore function from Redux
import { createStore } from 'redux'

import 'bulma/css/bulma.css';
import './styles.scss';

// We need a Reducer function to pass into our createStore()
const reducer = () => {
  return {
    name: 'elliot',
    faction: 'fsociety'
  }
}

const store = createStore(reducer)

console.log(store)

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
