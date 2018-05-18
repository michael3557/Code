import React from 'react';
import GetData from './GetData';
import { connect } from 'react-redux';
// import { addTodo } from '../actions/index'

class App extends React.Component {
    render () {
        return(
        <div>
           <h3>Get Data</h3>
           <GetData /> 
        </div>
    )}
}

function mapDispatchToProps (dispatch){
    return {
        onAddTodo: todo => dispatch(addTodo(todo))
    }
}
function mapStateToProps (state) {
	return {
  	    items: state.items
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
