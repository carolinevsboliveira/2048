import { useState } from "react";
import { useEffect } from "react";
const Redirect = ({url, text}) => {
    const [clicked, setClicked] = useState(false);
  
    useEffect(() => {
      if (clicked) {
        window.location.assign(url);
      }
    });
  
    return (
      <button className="goBack" onClick={() => setClicked(true)} style={{pointerEvents: "none"}}><h2>{text}</h2></button>
    );
  };

export default Redirect