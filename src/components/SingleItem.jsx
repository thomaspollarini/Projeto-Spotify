import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({id, name, image, banner, artist, idPath}) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img className="single-item__image" src={image} alt={`Imagem do Artista: ${artist}`} />
        </div>
        <FontAwesomeIcon className="single-item_icon" icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
            <p className="single-item_title">{name}</p>
        </div>
        <p className="single-item_type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
