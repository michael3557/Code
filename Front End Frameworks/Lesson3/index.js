import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
const favoriteCars = ['Honda CR-V ',
 'Toyota Highlander', 'Ford F-150', 
 'BMW X3', 'Subaru Crosstrek']

  return (
    <div>
      <List favoriteCars={favoriteCars}/>
  
    </div>
  );
};

const List = props => {
  const listItems = props.favoriteCars.map((item, index) => (<li key={index}>{item}</li>));

  return (
    <ol>
      {listItems}
    </ol>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);