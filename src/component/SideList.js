import React from "react";
import { Link } from "react-router-dom";

function Side({name, nameAbbr, keyword, period, images, onHover}) {
  return (
    <li
      onMouseEnter={() => onHover(nameAbbr, images[1])}
      onMouseLeave={() => onHover(null)}>
      <Link to={`work/${nameAbbr}`}>
        <span>{period}</span>
        <ul>
          {keyword.map((keyword, index) => 
            <li key={index}>&nbsp;{keyword}</li>
          )}
        </ul>
        <div><h4>{name}</h4></div>
      </Link>
    </li>
  );
}

export default Side;
