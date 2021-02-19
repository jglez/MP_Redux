// Initialize  state
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

// - At its simplest, Reducers are functions that return a state object
// - Reducers receive a state object and action object
// Since we're using Reducers with Redux, we need to define
// initialState / default state in parameters
const carReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// We don't use the useReducer hook with Redux
// Since we're not passing in initialState to our reducer, we need to define state
// inside of our parameters like this: 'state = initialState'

// const [state, dispatch] = useReducer(reducer, initialState)

export default carReducer