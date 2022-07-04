import { useContext } from "react";
import { Context } from "../../Context/Context";
import fourthKanye from "../Picture/img/png/fourthKanye.png";
import "../Picture/Picture.css";

function Picture() {
  const { spin } = useContext(Context);

  return (
    <div className="picture">
      <span
        className={`lnr lnr-sync spinner ${
          spin ? `spinOn` : `spinStop spinOff`
        } `}
      ></span>

      <img src={fourthKanye} />
    </div>
  );
}

export default Picture;
