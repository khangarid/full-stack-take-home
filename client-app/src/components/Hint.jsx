import React, { useState, useEffect } from "react";

// Possible positions: top, bottom, left, right
const Hint = ({ text, children, position = "bottom" }) => {
  const [visible, setVisibile] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisibile(true), 1000);
  }, []);

  const getClasses = () => {
    const classNames = ["hint__inner"];

    if (position) classNames.push(`hint__inner--${position}`);
    if (visible) classNames.push("hint__inner--visibile");

    return classNames.join(" ");
  };

  return (
    <div className="hint">
      <span
        role="button"
        aria-label="hint"
        className={getClasses()}
        onClick={() => setVisibile(false)}
        title="Close"
      >
        <span className="hint__text">{text}</span>
      </span>
      {children}
    </div>
  );
};

export { Hint };
