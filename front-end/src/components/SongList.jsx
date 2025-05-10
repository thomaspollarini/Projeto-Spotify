import React from "react";
import SongItem from "./SongItem";
import { useState, useRef } from "react";

const SongList = ({ songsArray }) => {
  const seeMoreRef = useRef();
  const [items, setItems] = useState(5);

  const seeMoreLess = () => {
    if (items === 5) {
      setItems(10);
      seeMoreRef.current.innerText = "Ver menos";
    } else {
      setItems(5);
      seeMoreRef.current.innerText = "Ver mais";
    }
  }

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currSongObj, index) => (
          <SongItem {...currSongObj} index={index} key={`song-${index}`} />
        ))}

      <p
        ref={seeMoreRef}
        className="song-list__see-more"
        onClick={() => {
          seeMoreLess();
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
