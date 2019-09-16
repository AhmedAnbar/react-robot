import React, { Component } from 'react';

import CardRobot from '../card-robot/CardRebot';

class CardList extends Component {
  state = {
    robots: []
  }

  componentDidMount() {
    this.fetchItems('https://jsonplaceholder.typicode.com/users')
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => this.setState({robots: result}))
    
  }
  render() {
    return (
      <div className='row'>
        {this.state.robots.map(robot => {
          return <CardRobot key={robot.id} robot={robot} />
        })}
      </div>
    )
  }
}

export default CardList;