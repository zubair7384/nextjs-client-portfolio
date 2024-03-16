import React from "react";
import Marquee from "react-fast-marquee";

const Marqee = (props) => {
  return (
    <Marquee direction={props.direction}>
      <h3
        style={props.top ? { borderBottom: "none" } : {}}
        className="marqeeWrapper"
      >
        {props.children}
      </h3>
    </Marquee>
  );
};

export default Marqee;
