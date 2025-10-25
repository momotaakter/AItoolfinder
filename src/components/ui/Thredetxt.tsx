// components/ThreeDText.tsx
import React from "react";

interface ThreeDTextProps {
  text: string;
  color?: string;
  size?: string;
  tracking?: string;
  className?: string;
}

const ThreeDText: React.FC<ThreeDTextProps> = ({
  text,
  color = "#013717",
  size = "70px",
  tracking = "0.05em",
  className = "",
}) => {
  return (
    <h1
      className={`font-sans ${className}`}
      style={{
        color: color,
        fontSize: size,
        letterSpacing: tracking,
        textShadow: `
          0px 0px 0 rgb(-2,23,8),
          1px 1px 0 rgb(-7,18,3),
          2px 2px 0 rgb(-12,13,0),
          3px 3px 0 rgb(-17,8,0),
          4px 4px 0 rgb(-22,3,0),
          5px 5px 0 rgb(-27,-2,0),
          6px 6px 0 rgb(-32,-7,0),
          7px 7px 0 rgb(-37,-12,0),
          8px 8px 0 rgb(-42,-17,0),
          9px 9px 0 rgb(-47,-22,0),
          10px 10px 0 rgb(-52,-27,0),
          11px 11px 10px rgba(0,0,0,0.6),
          11px 11px 1px rgba(0,0,0,0.5),
          0px 0px 10px rgba(0,0,0,0.2)
        `,
      }}
    >
      {text}
    </h1>
  );
};

export default ThreeDText;


