import React from 'react';
import ReactDOM from 'react-dom';

function list(state1, pop1, city1, state2, pop2, city2, state3, pop3, city3, state4, pop4, city4) {
  return (
    <table border="2">
      <tr>
        <th>{state1}</th>
        <th>{pop1}</th>
        <th>{city1}</th>
      </tr>
      <tr>
        <td>{state2}</td>
        <td>{pop2}</td>
        <td>{city2}</td>
      </tr>
      <tr>
        <td>{state3}</td>
        <td>{pop3}</td>
        <td>{city3}</td>
      </tr>
      <tr>
        <td>{state4}</td>
        <td>{pop4}</td>
        <td>{city4}</td>
      </tr>
    </table>
  );
}

ReactDOM.render(
  list("Idaho", "	1.683 million", "Boise", "Tennessee", "	6.651 million", "Nashville", "Maine", "1.331 million", "Agusta", "Wisconsin", "5.779 million", "Madiso"),
  document.getElementById('root')
);