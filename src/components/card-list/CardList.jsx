import React, { Component } from 'react';

import CardRobot from '../card-robot/CardRebot';
import Spinner from '../Spinner/Spinner';

class CardList extends Component {
  state = {
    robots: [],
    loading: false,
    error: null
  }

  componentDidMount() {
    this.fetchItems('https://jsonplaceholder.typicode.com/users')
  }

  fetchItems = (endpoint) => {
    this.setState({ loading: true})
    fetch(endpoint)
    .then(result => result.json())
    .then(result => this.setState({robots: result, loading: false}))
  }       
 
  render() {
    return (
      <div className='row'>
        {this.state.loading ? <Spinner /> : null}
        {this.state.robots.map(robot => {
          return <CardRobot key={robot.id} robot={robot} />
        })}
      </div>
    )
  }
}

export default CardList;