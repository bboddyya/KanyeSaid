import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import "./Button.css";
import { useEnterPressed } from "../../hooks/useEnterPressed";
function Button() {
  const { setQuote, setVisionQuote, setIsPlaying, spin, setSpin } =
    useContext(Context);

  async function getQuote() {
    const data = await fetch("https://api.kanye.rest");
    const json = await data.json();
    setSpin(false);
    setVisionQuote(true);
    setQuote(json.quote.toUpperCase());
    setIsPlaying(true);
  }

  const key = useEnterPressed();

  useEffect(() => {
    if (key) {
      getQuote();
    }
  }, [key]);

  return (
    <div className="button-wrapper">
      <button onClick={getQuote}>{spin ? `LET'S GO!` : `REFRESH`}</button>
    </div>
  );
}

export default Button;
