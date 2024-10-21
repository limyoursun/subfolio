import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img_bythewindow from "../assets/images/img_bythewindow.png";

import Data from "../data/project.json";
import SideList from "../component/SideList";

import style from "./../styles/SideProject.module.css";

gsap.registerPlugin(ScrollTrigger);

function Side({nameAbbr, type}) {
  useEffect(() => {
    const h4Elements = document.querySelectorAll("h4");
    h4Elements.forEach((h4) => {
      if (!h4.nextElementSibling) {
        const h4Copy = document.createElement("p");
        h4Copy.setAttribute("aria-hidden", "true");
        h4Copy.textContent = h4.textContent;
        h4.insertAdjacentElement("afterend", h4Copy);
      }
    });
  }, []);

  return (
    <section className={style.wrap}>
      <div>
        <img src={img_bythewindow} />
      </div>
      <ul>
        {Data.filter((work) => work.type === "side").map((work) => (
          <SideList
            nameAbbr={work.nameAbbr}
            name={work.name}
            images={work.images}
            category={work.category}
            period={work.period}
          />
        ))}
      </ul>
    </section>
  );
}

export default Side;
