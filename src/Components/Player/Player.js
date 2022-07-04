import "./Player.css";
import song from "./mp3/Kanye West - Father Stretch My Hands Pt. 1.mp3";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Context/Context";

const Player = () => {
  const { isPlaying, duration, setDuration, muted, setMuted } =
    useContext(Context);
  const progressBar = useRef();

  const [audio] = useState(new Audio(song));

  useEffect(() => {
    audio.volume = 0.05;
    isPlaying && audio.play();
  }, [isPlaying]);

  const whilePlaying = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    setDuration(progress);
    requestAnimationFrame(whilePlaying);
  };

  requestAnimationFrame(whilePlaying);

  const changeMute = () => {
    setMuted(!muted);
    audio.volume = muted ? 0.05 : 0;
  };

  return (
    <div className="player-wrapper">
      <button className="mute" onClick={changeMute}>
        {muted ? `unmute` : `mute`}
      </button>
      <div
        className="progress"
        ref={progressBar}
        style={{ width: `${duration}%` }}
      />
    </div>
  );
};

export default Player;
