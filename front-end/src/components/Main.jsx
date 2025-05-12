import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({type}) => {
  const itemsPerRow = type
    ? Infinity
    : Math.floor((window.innerWidth - 25 * 2 - 8 * 2) / 172);

  return (
    <div className="main">
      {/* Lista de artistas */}
      {type === "artists" || type === undefined ? <ItemList
        title="Artistas"
        items={itemsPerRow}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      /> : <></>}

      {/* Lista de músicas */}
      {type === "songs" || type === undefined  ? <ItemList
        title="Músicas"
        items={itemsPerRow * 2}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      /> : <></>}
      
    </div>
  );
};

export default Main;
