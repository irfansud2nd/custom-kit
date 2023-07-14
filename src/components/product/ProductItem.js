import React from "react";

export const ProductItem = ({
  onMouseOver,
  onMouseLeave,
  href,
  id,
  children,
}) => {
  return (
    <li className="mb-3">
      <a
        href=""
        onMouseOver={(e) => onMouseOver(e)}
        onMouseLeave={onMouseLeave}
        id={id}
        className="font-extrabold text-5xl cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
};
