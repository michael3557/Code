import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {

  return (
    <NumberOfStudents/>
  )
}
class NumberOfStudents extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        enrolledStudents : 22,
        waitlistedStudents : 4,
        addEnrolledStudents:"",
        addWaitlistedStudents:""
      };
    }

    increment1() {
        this.setState({enrolledStudents: this.state.enrolledStudents + 1});
        
    };
     increment2() {
        this.setState({enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addEnrolledStudents)});
    };
      increment3() {
        
        this.setState({waitlistedStudents: this.state.waitlistedStudents + 1});
    };
     increment4() {
        this.setState({waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addWaitlistedStudents)});
    };

    render() {
    return (
        <div>
        <h3>Enrolled Students:  {this.state.enrolledStudents}</h3>
        &ensp;<button onClick={this.increment1.bind(this)}>
           Add 1 Enrolled Student
        </button><br/><br/>Add Multiple Enrolled Students:<br/><br/>
        <input type="number" onChange={event => this.setState({ addEnrolledStudents: event.target.value})} 
        value={this.state.addEnrolledStudents}/>
        <button onClick={this.increment2.bind(this)}>
            Increase Students
        </button>

         <h3>Waitlisted Students:  {this.state.waitlistedStudents}</h3>
          &ensp;<button onClick={this.increment3.bind(this)}>
           Add 1 Waitlisted Student
        </button><br/><br/>Add Multiple Waitlested Students:<br/><br/>
        <input type="number" onChange={event => this.setState({ addWaitlistedStudents: event.target.value})} 
        value={this.state.addWaitlistedStudents}/>
        <button onClick={this.increment4.bind(this)}>
            Increase Students
        </button>
        
        </div>
        
      
    );
    }
    
   
     
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
