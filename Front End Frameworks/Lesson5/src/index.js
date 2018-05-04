import React from 'react';
import ReactDOM from 'react-dom';


class List extends React.Component {
  render() {
  	console.log("List's render function"); // this should not happen if the exact same props are provided a second time
    const list = this.props.items.map(item => (<li key={item}>{item}</li>));

    return (
      <ul>
          {list}
      </ul>
    );
  }
  
  shouldComponentUpdate(nextProps, nextState) {
        if (this.props.items !== nextProps.items){
            return true;
        }
       
        else{
            return false;
           
        }
      }
       componentWillMount(){
        console.log('componentWillMount');
      }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log("The component Updated!");
    }
  
}
 

const list1Items = ['Eggs', 'Bread', 'Artisinal cheese'];
const list2Items = ['Trains', 'Planes', 'Automobiles'];

const render = (items) => {
	console.log("outer render function");
  ReactDOM.render(
    <List items={items} />,
    document.getElementById('root')
  );
}


document.addEventListener('keydown', event => {
  // this checks if the 1 key is pressed
  if (event.code === 'Digit1') {
		render(list1Items);  
  }
  // this checks if the 2 key is pressed
  else if (event.code === 'Digit2') {
	  render(list2Items);
  }
  
});

render(list1Items);

ReactDOM.render(
  <List/>,
  document.getElementById('root')
)