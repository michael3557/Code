import React from 'react'
import Header from '../components/Header';

const Things = ({ match }) => (
    <div>
      <h3>{match.params.favoriteId}</h3>
      <img src="../Photograph.PNG" alt="Landscape of a lake" height="150"/>
    </div>
)

export default Things;