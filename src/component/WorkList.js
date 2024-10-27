import React from "react";
import { Link } from "react-router-dom";

/* css import */
import style from "./../styles/WorkList.module.css";

function WorkList({ client, nameAbbr, name, description, images, bg }) {
  return (
    <li>
      <div className={style.main}
        style={{ background: `${bg[1]}` }}
      >
        <span>{client}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{name}</span>
        <div className={`${style.info} info_wrap`}>
          <div>
            <span>{client}</span>
            <h2>{name}</h2>
            <Link to={`work/${nameAbbr}`}>프로젝트 상세보기</Link>
          </div>
          <p>{description}
          </p>
        </div>
        <div className={style.image}>
          {images.slice(0, 3).map((image, index) => 
            image[0] && (
              <img 
                key={index} 
                className={`image_${index + 1}`} 
                src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_${index + 1}.png`}
                alt={image[1]}
              />
            )
          )}
        </div>
      </div>
    </li>
  );
}

export default WorkList;
