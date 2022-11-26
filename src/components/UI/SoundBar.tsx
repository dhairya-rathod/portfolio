import { useState, useEffect, useRef } from "react";

// import audio from "../../../public/audio/audio.mp3";

const SoundBar = () => {
  const soundBarEl = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) soundBarEl.current?.play();
    else soundBarEl.current?.pause();
  };

  useEffect(() => {
    document.querySelector<any>(".soundBars").onclick = function () {
      this?.classList.toggle("play");
    };
  }, []);

  return (
    <div
      className="soundBars link absolute  flex items-center justify-center cursor-pointer"
      onClick={togglePlayPause}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <audio ref={soundBarEl} src="/audio/audio.mp3" loop preload="auto" />
    </div>
  );
};

export default SoundBar;
