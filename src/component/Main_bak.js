import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import style from "./../styles/Main.module.css";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  useEffect(() => {
    gsap.fromTo("h1", {
      opacity:0,
      duration:1,
      delay:1
    },{
      opacity:1,
      duration:1
    });

    gsap.from("#mainL", {
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#Main",
        start: "top top",
        onEnter: () =>
          gsap.to("#mainL", {
            rotate: 20,
            x: -150,
            y: -100,
            duration: 0.5,
            delay: 0.2,
          }),
        onLeaveBack: () =>
          gsap.to("#mainL", { rotate: 0, x: 0, y: 0, duration: 0.5 }),
      },
    });

    gsap.from("#mainI", {
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#Main",
        start: "top top",
        onEnter: () =>
          gsap.to("#mainI", {
            rotate: 75,
            x: -100,
            y: -90,
            duration: 0.5,
            delay: 0.3,
          }),
        onLeaveBack: () =>
          gsap.to("#mainI", { rotate: 0, x: 0, y: 0, duration: 0.5 }),
      },
    });

    gsap.from("#mainM", {
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#Main",
        start: "top top",
        onEnter: () =>
          gsap.to("#mainM", {
            rotate: -60,
            x: 100,
            y: -70,
            duration: 0.5,
            delay: 0.2,
          }),
        onLeaveBack: () =>
          gsap.to("#mainM", { rotate: 0, x: 0, y: 0, duration: 0.5 }),
      },
    });

    gsap.from("#mainS", {
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#mainS",
        start: "top center",
        onEnter: () =>
          gsap.to("#mainS", {
            rotate: -10,
            x: -550,
            y: 140,
            duration: 0.5,
            delay: 0.1,
          }),
        onLeaveBack: () =>
          gsap.to("#mainS", { rotate: 0, x: 0, y: 0, duration: 0.5 }),
      },
    });
    gsap.from("#mainU", {
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#mainU",
        start: "top center",
        onEnter: () =>
          gsap.to("#mainU", { rotate: -50, x: -250, y: -140, duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to("#mainU", { rotate: 0, x: 0, y: 0, duration: 0.5 }),
      },
    });
    gsap.from("#mainN", {
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#mainN",
        start: "top center",
        onEnter: () =>
          gsap.to("#mainN", { rotate: 10, x: 400, y: 70, duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to("#mainN", { rotate: 0, x: 0, y: 0, duration: 0.5 }),
      },
    });
    gsap.from(".triangle_top", {
      duration: 0.1,
      scrollTrigger: {
        trigger: "#mainN",
        start: "bottom 75%",
        onEnter: () => gsap.to(".triangle_top", { y: -399, duration: 0.5 }),
        onLeaveBack: () => gsap.to(".triangle_top", { y: 0, duration: 0.5 }),
      },
    });
  }, []);
  return (
    <section id="Main" className={style.wrap}>
      <h1>
        <div>
          <table>
            <caption className="hidden">page info</caption>
            <tbody>
              <tr>
                <td rowspan="2">S</td>
                <td>PUBLISHING PORTFOLIO</td>
              </tr>
              <tr>
                <td>
                  <small>©</small> 2024. LIMSUN. All rights reserved.
                </td>
              </tr>
            </tbody>
          </table>
          <div className={style.limsun}>LI<i>M</i>SUN
            <div className={style.arrow}><span className={style.arrow_tag}>HTML/CSS</span></div>
          </div>
          <img src="./../assets/images/img_main_1.png" alt="2024 포트폴리오 썸네일 이미지"/>
        </div>
        <div>
          <div className={style.design}>DE<i>SIGN</i></div>
          <img src="./../assets/images/img_main_2.png" alt="by the window 썸네일 이미지"/>
          <div className={style.uiux}>UI<i>&</i>UX</div>
        </div>
        <div>
          <img src="./../assets/images/img_main_3.png" alt="기상청 태풍정보서비스 썸네일"/>
          <div className={style.portfolio}><span>P<i>O</i>RT</span><span>FOLIO</span>
            <div className={style.arrow}><span className={style.arrow_tag}>Javascript</span></div>
            <ul>
              <li>S&nbsp;&nbsp;:&nbsp;&nbsp;2021 년도</li>
              <li>E&nbsp;&nbsp;:&nbsp;&nbsp;2024 년도</li>
            </ul>
          </div>
          <img src="./../assets/images/img_main_4.png" alt="2021 포트폴리오 썸네일 이미지"/>
        </div>
      </h1>
      <div className="triangle_top" aria-hidden="true"></div>
    </section>
  );
}

export default Main;
