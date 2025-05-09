import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Lista de artistas */}
      <ItemList title="Artistas" items={5} />

      {/* Lista de músicas */}
      <ItemList title="Músicas" items={10} />
    </div>
  );
};

export default Main;
