import React from 'react'
import Things from './Things'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Topics = ({ match }) => (
    <div>
      <h2>My Favorit Things</h2>
      <ul>
        <li>
          <Link to={`${match.url}/Taking amazing photographs.`}>Photography</Link>
        </li>
        <li>
          <Link to={`${match.url}/Finding beautiful places.`}>Landscapes</Link>
        </li>
        <li>
          <Link to={`${match.url}/Climing to the top of the world.`}>Hiking</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:favoriteId`} component={Things} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Make A Selection</h3>}
      />
    </div>
);

export default Topics;