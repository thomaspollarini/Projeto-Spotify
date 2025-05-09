import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  return (
    <div className="song-list">
      {songsArray.map((currSongObj, index) => (
        <SongItem {...currSongObj} index={index} key={`song-${index}`} />
      ))}

      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
