import React from "react";

const Sparkle = ({ buttonDisplayName, clickHandlerTwo }) => (
  <button className="sparkle" onClick={clickHandlerTwo}>
    {buttonDisplayName}
  </button>
);

export default Sparkle;
