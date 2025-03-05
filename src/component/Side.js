import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import component
import Data from "../data/project.json";
import SideList from "../component/SideList";

// import style
import style from "./../styles/SideProject.module.css";

// import image
import img_bg from "../assets/images/img_portfolio2024_1.webp";
import bg_img from "../assets/images/bg_portfolio2024.webp";

gsap.registerPlugin(ScrollTrigger);

function Side() {
  const [currentNameAbbr, setCurrentNameAbbr] = useState("");
  const [currentImageAlt, setCurrentImageAlt] = useState("");

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

  const handleHover = (nameAbbr, images) => {
    setCurrentNameAbbr(nameAbbr);
    setCurrentImageAlt(images);
  };

  return (
    <section className={style.wrap} style={{"backgroundImage" : currentNameAbbr ? `url(https://raw.githubusercontent.com/limyoursun/limyoursun/refs/heads/main/subtfolio/bg_${currentNameAbbr}.webp)` : `url(${bg_img})`, "backgroundRepeat":"no-repeat", "backgroundSize":"cover"}}>
      <div><img src={ currentNameAbbr ? `https://raw.githubusercontent.com/limyoursun/limyoursun/refs/heads/main/subtfolio/img_${currentNameAbbr}_1.webp` : img_bg} alt={ currentImageAlt ? `${currentImageAlt}` : "사이드 프로젝트의 미리보기 화면입니다. 사이드 프로젝트 리스트 hover or active시 미리보기 화면이 해당 프로젝트의 프리뷰 화면으로 전환됩니다."}/></div>
      <ul>
        {Data.filter((work) => work.type === "side").map((work) => (
          <SideList
            key={work.nameAbbr}
            nameAbbr={work.nameAbbr}
            period={work.period}
            keyword={work.keyword}
            name={work.name}
            images={work.images}
            onHover={handleHover}
          />
        ))}
      </ul>
    </section>
  );
}

export default Side;
