import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Data from "../data/project.json";
import WorkList from "../component/WorkList";

/* css import */
import style from "./../styles/Work.module.css";
gsap.registerPlugin(ScrollTrigger);

function Work() {
  useEffect(() => {
    gsap.to(".cv_text", {
      duration: 2,
      delay: 2,
      scrollTrigger: {
        trigger: "#workWrap",
        start: "top 80%",
        onEnter: () => gsap.to("#workWrap li > div", {margin: "10rem 20rem 7rem", borderRadius: "2rem", duration: .5,}),
        onLeaveBack: () => gsap.to("#workWrap li > div", {margin: "0", borderRadius: "0", duration: .5,}),
      },
    });
    gsap.set(".image_2", {position: "absolute", opacity: "0", left: 0, top: "40%",});
    gsap.set(".image_3", {position: "absolute", opacity: "0", right: 0, top: "13%",});
    gsap.set(".info_wrap", { opacity: "0" });

    document.querySelectorAll(".image_1").forEach((mainImage) => {
      const info = mainImage.closest("li").querySelector(".info_wrap");
      const subImage = mainImage.closest("li").querySelector(".image_2");
      const thridImage = mainImage.closest("li").querySelector(".image_3");

      gsap.to(".image_1", {
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: mainImage,
          start: "top 65%",
          onEnter: () => {
            gsap.to(subImage, { opacity: 1, duration: 0.5 });
            gsap.to(thridImage, { opacity: 1, duration: 0.5, delay: 0.4 });
            gsap.to(info, { opacity: 1, duration: 0.3, delay: 0.2 });
          },
          onLeaveBack: () => {},
        },
      });
    });
  }, []);

  return (
    <section id="workWrap" className={style.wrap}>
      <ul>
        {Data.filter((work) => work.type === "work").map((work) => (
          <WorkList
            client={work.client}
            nameAbbr={work.nameAbbr}
            name={work.name}
            description={work.description}
            images={work.images}
            url={work.url}
            bg={work.bg}
          />
        ))}
      </ul>
    </section>
  );
}

export default Work;
