import "./Player.css";
import song from "./mp3/Kanye West - Father Stretch My Hands Pt. 1.mp3";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../Context/Context";

const Player = () => {
  const { isPlaying, duration, setDuration, muted, setMuted } =
    useContext(Context);
  const audioPlayer = useRef();
  const progressBar = useRef();

  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.volume = 0.05;
    isPlaying && audioPlayer.current.play();
  }, [isPlaying]);

  const whilePlaying = () => {
    const progress =
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100;
    setDuration(progress);

    requestAnimationFrame(whilePlaying);
  };
  requestAnimationFrame(whilePlaying);

  const changeMute = () => {
    const audio = document.getElementById("audio");
    setMuted(!muted);
    audio.volume = muted ? 0.05 : 0;
  };

  return (
    <div className="player-wrapper">
      <button className="mute" onClick={changeMute}>
        {muted ? `unmute` : `mute`}
      </button>
      <audio src={song} ref={audioPlayer} id="audio" />
      <div
        className="progress"
        ref={progressBar}
        style={{ width: `${duration}%` }}
      />
    </div>
  );
};

export default Player;
