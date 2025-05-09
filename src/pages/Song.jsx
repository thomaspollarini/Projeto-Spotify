import React from 'react'

const Song = () => {
  return (
    <div className='song'>
      <div className="song__containter">
        <div className="song__image-container">
          <img src="" alt="Imagem da Música" />
        </div>
      </div>

      <div className="song__bar">
        <div className='song__artist-image'>
          <img src="" alt="Imagem do Artista" />
        </div>
        {/*player */}
        <div>
          <p className='song__name'>{/*Name */}</p>
          <p>{/*artist */}</p>
        </div>
      </div>
    </div>
  )
}

export default Song