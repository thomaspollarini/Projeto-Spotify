import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay ,faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Player = ({ duration }) => {
  return (
    <div className='player'>
        <div className="player__controllers">
            <Link to="/song/1">
                <FontAwesomeIcon icon={faBackwardStep} className='player__icon' />
            </Link>
            <FontAwesomeIcon icon={faCirclePlay} className='player__icon player__icon--play' />
            <Link to="/song/2">
                <FontAwesomeIcon icon={faForwardStep} className='player__icon' />
            </Link>
        </div>
        <div className="player__progress">
            <p>{/*song time progress */}</p>
            <div className='player__bar'>
                <div className="player__bar-progress"></div>
            </div>
            <p>{duration}</p>
        </div>
    </div>
  )
}

export default Player