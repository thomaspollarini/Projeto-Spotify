import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return minutes * 60 + seconds;
};

const Player = ({ audio, duration, randomIdFromArtist }) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  const changeSong = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(formatTime(0));
    progressBar.current.style.setProperty("--_progress", "0%");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

        progressBar.current.style.setProperty(
          "--_progress",
          `${(audioPlayer.current.currentTime / durationInSeconds) * 100}%`
        );
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`} onclick={() => changeSong()}>
          <FontAwesomeIcon icon={faBackwardStep} className="player__icon" />
        </Link>
        <FontAwesomeIcon
          icon={isPlaying ? faCirclePause : faCirclePlay}
          className="player__icon player__icon--play"
          onClick={() => {
            playPause();
          }}
        />
        <Link to={`/song/${randomIdFromArtist}`} onclick={() => changeSong()}>
          <FontAwesomeIcon icon={faForwardStep} className="player__icon" />
        </Link>
      </div>
      <div className="player__progress">
        <p className="player__time">{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p className="player__time">{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
