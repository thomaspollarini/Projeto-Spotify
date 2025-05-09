import React from "react";
import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const songObj = songsArray.filter(
    (currentArtistObj) => currentArtistObj.id === Number(id)
  )[0];
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === songObj.artist
  )[0];

  return (
    <div className="song">
      <div className="song__containter">
        <div className="song__image-container">
          <img src={songObj.image} alt={`Imagem da Música: ${songObj.name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img src={artistObj.image} alt={`Imagem do Artista: ${artistObj.name}`} />
        </Link>
        <Player duration={songObj.duration}/>
        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
