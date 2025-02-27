import React from "react";

function MarqueeImg({ src }) {
  return (
    <img style={{ height: "80px", marginLeft: "10px" }} src={src} alt="" />
  );
}

export default MarqueeImg;
