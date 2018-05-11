import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  }
  incrementBy5 = () => {
    this.props.dispatch({
      type: 'IncrementBy5'
    });
  }
  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  }
   decrementBy10 = () => {
    this.props.dispatch({
      type: 'DecrementBy10'
    });
  }

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
           <button onClick={this.decrementBy10}>-10</button>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.incrementBy5}>+5</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

// Add the below function:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// Replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(Counter);




