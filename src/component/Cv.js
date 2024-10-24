import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import style from "./../styles/Cv.module.css";

gsap.registerPlugin(TextPlugin);

function Cv() {
  useEffect(() => {
    // Image Trail
    const hero = document.querySelector(".hero");
    const settings = {
      isEnabled: false,
      count: 1,
      time: 100,
    };
    const images = [
      "mouse/img_main_ (1).png",
      "mouse/img_main_ (2).png",
      "mouse/img_main_ (3).png",
      "mouse/img_main_ (4).png",
      "mouse/img_main_ (5).png",
      "mouse/img_main_ (6).png",
      "mouse/img_main_ (7).png",
      "mouse/img_main_ (8).png",
      "mouse/img_main_ (9).png"
    ];

    const preloadImages = () => {
      for (let i = 0; i < images.length; i++) {
        let link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = images[i];
        document.head.appendChild(link);
      }
    };

    const calcIndex = (length) => {
      settings.count++;
      if (settings.count === length) settings.count = 0;
      return settings.count;
    };
    const animateImages = (event) => {
      const image = document.createElement("img");
      const imageSize = 12;
      const countIndex = calcIndex(images.length);
      const heroRect = hero.getBoundingClientRect();
    
      image.classList.add("hero_media");
      image.setAttribute("src", images[countIndex]);
      image.style.width = `${imageSize}rem`;
      image.style.height = `${imageSize}rem`;
      image.style.left = `${event.clientX - heroRect.left - imageSize * 5}px`;
      image.style.top = `${event.clientY - heroRect.top - imageSize * 5}px`;
      hero.appendChild(image);
    
      window.setTimeout(() => image.style.opacity = "1", 200);
      window.setTimeout(() => image.style.opacity = "0", 200);
      window.setTimeout(() => hero.removeChild(image), 2500);
    };

    window.addEventListener("mousemove", (event) => {
      if (!settings.isEnabled) {
        settings.isEnabled = true;

        setTimeout(() => {
          settings.isEnabled = false;
        }, settings.time);

        animateImages(event);
      }
    });

    window.onload = () => {
      preloadImages();
    };
  });
  return (
    <section className={style.wrap}>
      <div>
        <div>
          더 많은
          <div className={style.scrolling}>
            <ul>
              <li style={{ color: "#ffbafd" }}>기본 이력</li>
              <li style={{ color: "#63dbff" }}>경력 활동</li>
              <li style={{ color: "#b5ff63" }}>프로젝트</li>
              <li style={{ color: "#ffda6e" }}>기술 스택</li>
              <li style={{ color: "#ffbafd" }}>기본 이력</li>
            </ul>
          </div>
          정보가 궁금하신가요?
        </div>
        <Link className="btn_arrow" to="https://www.rallit.com/resumes/270797@limyoursun/%EC%9E%84%EC%84%A0" target="_blank">
          <span>경력기술서 / 이력서로 이동</span>
          <em aria-hidden="true">이동 화살표</em>
        </Link>
      </div>
    </section>
  );
}

export default Cv;
