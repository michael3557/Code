import React from 'react'
import Header from '../components/Header';

const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
)

export default Topic;