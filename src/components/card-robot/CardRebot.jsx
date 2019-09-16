import React from 'react';
import './CardRobot.css';

const CardRobot = (props) => {
  return (
    <div className='col-xs-6 col-md-3'>
      <div className="card mb-4">
        <img src={`https://robohash.org/${props.robot.email}?set=set3`} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{props.robot.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default CardRobot;