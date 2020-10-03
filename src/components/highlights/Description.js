import React from "react";
import Fade from "react-reveal/Fade";

function Description() {
  return (
    <Fade top delay="500">
      <div className="center_wrapper">
        <h2>Highlights</h2>
        <div className="highlight_description">
          React Reveal is an animation framework for React. It's MIT licensed,
          has a tiny footprint and written specifically for React in ES6. It can
          be used to create various cool reveal on scroll animations in your
          application. If you liked this package, don't forget to star the
          Github repository.
        </div>
      </div>
    </Fade>
  );
}

export default Description;
