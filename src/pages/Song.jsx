import React from 'react'
import { Link } from 'react-router-dom'
import Player from '../components/Player'

const Song = () => {
  return (
    <div className='song'>
      <div className="song__containter">
        <div className="song__image-container">
          <img src="" alt="Imagem da Música" />
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/1" className='song__artist-image'>
          <img src="" alt="Imagem do Artista" />
        </Link>
        <Player />
        <div>
          <p className='song__name'>{/*Name */}</p>
          <p>{/*artist */}</p>
        </div>
      </div>
    </div>
  )
}

export default Song