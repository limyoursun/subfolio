import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import img_main_1 from "../assets/images/img_main_1.jpg";
import img_main_2 from "../assets/images/img_main_2.jpg";
import img_main_3 from "../assets/images/img_main_3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import style from "./../styles/Main.module.css";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  useEffect(() => {
    gsap.fromTo("h1 > *", { rotateX: 90, duration: 1, stagger: 0.1 },{ rotateX: 0, opacity: 1, delay: .2, duration: 1, stagger: 0.1 });
    function mainGsap(target, rotate, targetX, targetY, delay){
      gsap.from(target, {
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#Main",
          start: "top top",
          onEnter: () => gsap.to(target, { rotate: rotate, x: targetX, y: targetY, duration: 0.5, delay: delay }),
          onLeaveBack: () => gsap.to(target, { rotate: 0, x: 0, y: 0, duration: 0.5 }),
        },
      });
    }
    mainGsap(".mainL", -50, -150, 110, 0.4)
    mainGsap(".mainI", -160, -190, -180, 0.2)
    mainGsap(".mainM", -40, -100, -200, 0.15)
    mainGsap(".mainS", 40, 100, -300, 0.15)
    mainGsap(".mainU", 30, 100, -250, 0.22)
    mainGsap(".mainN", 60, 250, 100, 0.3)

    gsap.from(".triangle_top", {
      duration: 0.1,
      scrollTrigger: {
        trigger: "#Main",
        start: "top top",
        onEnter: () => {
          gsap.to(".Main p", { y: -399, opacity: 0, duration: 0.1 });
          gsap.to(".triangle_top", { y: -399, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(".Main p", { y: 0, opacity: 1, duration: 0.1 });
          gsap.to(".triangle_top", { y: 0, duration: 0.5 });
        },
      },
    });
    gsap.from("h1 > div", {
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#Main",
        start: "top top",
        onEnter: () => gsap.to("h1 > div", { rotate: 10, x: 40, y: 150, duration: 0.5, delay: 0.1}),
        onLeaveBack: () => gsap.to("h1 > div", { rotate: 0, x: 0, y: 0, duration: 0.5}),
      },
    });
  }, []);

  return (
    <section id="Main" className={style.wrap}>
      <article className="hero"></article>
      <h1>
        <span className="mainL">L</span>
        <span className="mainI">i</span>
        <span className="mainM point">M</span>
        <div>
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
            <SwiperSlide><img src={img_main_1} alt="카드 이미지"/></SwiperSlide>
            <SwiperSlide><img src={img_main_2} alt="카드 이미지"/></SwiperSlide>
            <SwiperSlide><img src={img_main_3} alt="카드 이미지"/></SwiperSlide>
          </Swiper>
        </div>
        <span className="mainS">S</span>
        <span className="mainU">U</span>
        <span className="mainN point">N</span>
      </h1>
      <div className="triangle_top" aria-hidden="true"></div>
    </section>
  );
}

export default Main;
