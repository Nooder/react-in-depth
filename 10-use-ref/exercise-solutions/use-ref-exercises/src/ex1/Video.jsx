import monkeyImg from "../assets/monkey.mp4";
import { useRef } from "react";

function Video() {
  const videoRef = useRef(null);

  function enter() {
    videoRef.current.play();
  }

  function leave() {
    videoRef.current.pause();
  }

  return (
    <video
      ref={videoRef}
      src={monkeyImg}
      onMouseEnter={enter}
      onMouseLeave={leave}
    ></video>
  );
}

export default Video;
