import React from "react";
import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link to="/song/1" className="song-item">
      <div className="song-item__number-album">
        <p>{/*index */}</p>
        <div className="song-item__album">
          <img src="" alt="Imagem da Música" className="song-item__image" />
          <p className="song-item__name">{/*Name */}</p>
        </div>
      </div>
      <p>{/*Duration */}</p>
    </Link>
  );
};

export default SongItem;
