import React, { Component } from 'react';

import CardRobot from '../card-robot/CardRebot';
import Spinner from '../Spinner/Spinner';

class CardList extends Component {
  state = {
    robots: [],
    loading: false,
    searchField: '',
    error: null,
    filteredRobots: []
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

  searchRobot = (e) => {
    if(!e.target.value) {
      this.fetchItems('https://jsonplaceholder.typicode.com/users')
    } else {
      this.setState({searchField: e.target.value}, () => {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        this.setState({filteredRobots: filteredRobots}, () => {
          console.log(this.state)
        })
      })
    }
    
  }
 
  render() {
    
    

    return (
      <React.Fragment>
        <div className='row justify-content-center mb-3'>
          <div className='col-xs-12'>
            <div className="form-group">
              <input type='search' placeholder='Search Robot' onChange={this.searchRobot} className='form-control'/>
            </div>
          </div>
        </div>
        <div className='row'>
          {this.state.loading ? <Spinner /> : null}
          {this.state.filteredRobots.length < 1 ?
            this.state.robots.map(robot => {
              return <CardRobot key={robot.id} robot={robot} />
            })
          :
          this.state.filteredRobots.map(robot => {
            return <CardRobot key={robot.id} robot={robot} />
          })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default CardList;