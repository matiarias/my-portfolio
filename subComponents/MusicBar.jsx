import { useRef, useState } from "react";

import SvgAlien from "./SvgComponent";

const MusicBar = () => {
  const [click, setClick] = useState(false);

  const [animateAlien, setAnimateAlien] = useState(false);

  const refMusic = useRef(null);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      refMusic.current.play();
      setAnimateAlien(true);
    } else {
      refMusic.current.pause();
      setAnimateAlien(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="shadow-lg shadow-gray-300"
      style={{
        position: "absolute",
        top: "100px",
        right: "30px",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "100%",
      }}
    >
      {animateAlien ? (
        <SvgAlien fill={"#00af10"} />
      ) : (
        <SvgAlien fill={"rgb(229,231,235)"} />
      )}

      <audio
        ref={refMusic}
        loop
        src="/assets/audio/dreamkid-fugitive.mp3"
      ></audio>
    </div>
  );
};

export default MusicBar;
