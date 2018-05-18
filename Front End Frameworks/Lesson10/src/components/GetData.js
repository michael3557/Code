import React from "react";



let APIUrl = "../data.json";
class GetData extends React.Component {
  state = {
    data1: [],
    errors: null
  };
  componentDidMount() {
    fetch(APIUrl)
      .then(rep => rep.json())
      .then(payload => {
        this.setState({ data1: payload })
      })
      .catch(err => this.setState({ error: err }));
  }


  
  render() {
    console.log(this.state.data);
    let key = 0;
    
    return (
      <div className="data" >
        {this.state.data1.map(mapData => (
          <p key={key++}>
            <span>Name: <strong>{mapData.firstName} {mapData.lastName}</strong></span><br />
            <span>email:<strong>{mapData.email}</strong></span><br />
          </p>
        ))}
      </div>
       
    );
  }
}



export default GetData

