import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Artist = () => {
  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{ backgroundImage: "linear-gradient(to bottom, shade, url())" }}
      >
        <h2 className="artist__title"></h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        {/*<SongList />*/}
      </div>

      <Link to="/song/1">
        <FontAwesomeIcon icon={faCirclePlay} />
      </Link>
    </div>
  );
};

export default Artist;
