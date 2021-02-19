import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// We need the connect function from React-Redux to:
// - connect our component to the Redux Store
// - enable component subscribing to Store
// - enable components to update on state change
import { connect } from 'react-redux'

// We read using mapStateToProps()
// We write using mapDispatchToProps()

const App = (props) => {

  console.log('App Props:', props)

  return (
    <div className="boxes">
      <div className="box">

        <Header car={props.car} />

        <AddedFeatures car={props.car} />

      </div>
      <div className="box">

        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />

        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// mapStateToProps is usually defined outside of connect
const mapStateToProps = state => {
  // We have access to the entire Redux Store inside here
  return {
    // We can add properties here and they will be added to our component's props
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

// THIS is done instead of this V

// export default connect(state => {
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice
//   }
// })(App)

///// STEP 3: Connect component to Redux Store /////
// Connect is a HOC (Higher Order Component)
// A higher order function is a function that takes in another function through args
// A higher order component is a function that takes a component as an argument

// - Connect returns a function, so what we're going to do is take the
//   returned function and immediately invoke it
// - This is known as function currying, named after Haskell Curry
// - The second call takes our component through args so it can be connected to the Store
export default connect(mapStateToProps)(App)

/* Connect explained:
1. The first call takes two arguments:
  1. A function that will map over state from the Redux Store
       - This function is called by connect and is passed the state obj from Redux
  2. An object - its properties will be added to the connected component's props

2. The second call takes our component through args so it can be connected to the Store
     - This is where we grab our state and add it to props so our component can use it
*/

// connect returns a function
// connect() replaces our component export because whatever connect() returns will be exported
// export default App;
