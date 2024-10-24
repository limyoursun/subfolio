import React from "react";
import { Link } from "react-router-dom";

import style from "./../styles/SideProject.module.css";

function Side({name, nameAbbr, category, period}) {
  return (
    <li>
      <Link to={`work/${nameAbbr}`}>
        <span>{period}</span>
        <ul>
          {category.map((category) => 
              <li>&nbsp;{category}</li>
            )}
        </ul>
        <div>
          <h4>{name}</h4>
        </div>
      </Link>
    </li>
  );
}

export default Side;
