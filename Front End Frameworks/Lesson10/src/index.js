import React from "react";
import { render } from "react-dom";

let APIUrl = "../data.json";

class App extends React.Component {
  state = {
    key: 0,
  };
  render() {
    // console.log(this.props.name);
    return (
      <div className="app">
        <Header />
        <Data />
        <Form />
      </div>
    )
  };
}
class Header extends React.Component {
  state = {
    key: 0,
  };
  render() {
    // console.log(this.props.name);
    return (
      <div className="header">
        <h1>Contacts</h1>
      </div>
    )
  };
}
class Form extends React.Component {
  state = {
    key: 0,
  };
  render() {
    // console.log(this.props.name);
    return (
      <div className="form">
        <form>
         <span> First name:<input type="text" name="firstname" /></span><br/>
         <span> Last name:<input type="text" name="lastname" /></span><br/>
         <span> Phone: <input type="text" name="lastname" /></span><br/>
         <span> Email: <input type="text" name="lastname" /></span><br/>
        </form>
        <button type="update" form="form1" value="update">Update</button>
        <button type="delete" form="form1" value="delete">Delete</button>
      </div>
              )
            };
          }
class Data extends React.Component {
                state = {
                  data1: [],
                  key: 0,
                  errors: null
                };
              componentDidMount() {
                fetch(APIUrl)
                  .then(rep => rep.json())
                  .then(payload => {
                    this.setState({ data1: payload })
                  })
                  .catch(err => this.setState({ error: err }));
              };
  render() {
                let keyNum = 0;
              return (
      <div className="data" >
                {this.state.data1.map(mapData => (
                  <p key={keyNum++} onClick={() => this.setState({ key: mapData.id })}>
                    <span>Name: <strong>{mapData.firstName} {mapData.lastName}</strong></span><br />
                    <span>email:<strong>{mapData.email}</strong></span><br />
                  </p>
                ))}
              </div>
              )
            };
          }
render(<App />, document.getElementById("root"))
