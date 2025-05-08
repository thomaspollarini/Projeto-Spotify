import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a className="item-list__link" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="item-list__container">
            <div className="single-item">
              <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                  <img className="single-item__image" src="" alt="" />
                </div>
                <FontAwesomeIcon className="single-item_icon" icon={faCirclePlay} />
              </div>
    
              <div className="single-item__texts">
                  <p className="single-item_title">Nome</p>
                  <p className="single-item_type">artista/musica</p>
              </div>
            </div>
</div>
      </div>
    </div>
  );
};

export default Main;
