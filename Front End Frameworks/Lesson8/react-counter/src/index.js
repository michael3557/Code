import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  
  switch(action.type) {
    case 'Reset':
    change(0);
    return {
      count: state.count = 0
    };
    case 'Increment':
      change(1);
      return {
        count: state.count + 1
      };
      case 'IncrementBy5':
      change(5);
      return {
        count: state.count + 5
      };
    case 'Decrement':
      change(-1);
      return {
        count: state.count - 1
      };
      case 'DecrementBy10':
      change(-10);
      return {
        count: state.count - 10
      };
    default:
      return state;
  }
 
}

const store = createStore(reducer);


// Something a little extra div background-color change on +- side of 0
function change(change) {
  let number = store.getState().count
  console.log("number: " + number + " change: " + change);
  if (change === 0 ) {
    document.getElementById("root").getElementsByTagName("div")[0].style.backgroundColor = "rgba(51, 13, 218, 0.404)";
  }
  else if (number + change >= 0) {
    document.getElementById("root").getElementsByTagName("div")[0].style.backgroundColor = "lightblue";
  }
  else {
     document.getElementById("root").getElementsByTagName("div")[0].style.backgroundColor = "red";
  }

}







const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);


render(<App />, document.getElementById('root'));

