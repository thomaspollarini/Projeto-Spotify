import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currSongObj, index) => (
          <SongItem {...currSongObj} index={index} key={`song-${index}`} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
          document.querySelector(".song-list__see-more").style.display = "none";
          document.querySelector(".song-list__see-less").style.display =
            "block";
        }}
      >
        Ver mais
      </p>

      <p
        className="song-list__see-less"
        onClick={() => {
          setItems(items - 5);
          document.querySelector(".song-list__see-less").style.display = "none";
          document.querySelector(".song-list__see-more").style.display =
            "block";
        }}
      >
        Ver menos
      </p>
    </div>
  );
};

export default SongList;
