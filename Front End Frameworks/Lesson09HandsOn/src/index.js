import React from "react";
import { render } from "react-dom";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
let APIUrl = "https://jsonplaceholder.typicode.com/photos";
class App extends React.Component {
  state = {
    pictures: [],
    errors: null
  };

  componentDidMount() {
    fetch(APIUrl)
      .then(rep => rep.json())
      .then(payload => {
        let first50 = payload.filter((i, index) => index < 100); /// I did play aournd a bit with the nuber of pics so I rase it to 100
  //    console.log(first50);                                     ///  this is just to show more of my id's on the pics.     
        this.setState({pictures: first50})
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {                                 /// bellow is the only code I wrote and it adds an Id number for each pic and the div to hold them both
   // console.log(this.state.pictures.title); /// p tag i am doing a turnary to check if the pic id is less then 10 to add a 0 
    return (
      <div style={styles}>
          
           {this.state.pictures.map(pic => (
              <div>
                <p>ID:{pic.id < 10 ? "0" + pic.id : pic.id }</p>  
                <img src={pic.thumbnailUrl} alt={pic.title}/>
              </div>
        ))}
        
     
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));