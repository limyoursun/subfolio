import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./../styles/Introduce.module.css";

gsap.registerPlugin(ScrollTrigger);

function Introduce() {
  useEffect(() => {
    gsap.from(".intro", {
      duration: 0.1,
      scrollTrigger: {
        trigger: "#Main",
        start: "top top",
        onEnter: () => gsap.to(".intro", { y: -50, duration: 0.5 }),
        onLeaveBack: () => gsap.to(".intro", { y: 0, duration: 0.2 }),
      },
    });
    gsap.to(".intro_text", {
      scrollTrigger: {
        trigger: "#Main",
        start: "top top",
        onEnter: () => gsap.to(".intro_text", { text: "반갑습니다!", delay: .5, duration: 1}),
        onLeaveBack: () => gsap.to(".intro_text", { text: "안녕하세요!", delay: .5, duration: 1})
      },
    });
  });
  return (
    <section className={style.wrap}>
      <div className="intro">
        <p className="intro_text">안녕하세요!</p>
        <p>디테일을 사랑하고 창의적인 웹을 만드는</p>
        <p>퍼블리셔 임선입니다.</p><br/>
        <p>작은 디테일의 차이를 좋아하며, </p>
        <p>기록을 통해 더 나은 결과를 만들어가요.</p>
        <p>멋진 협업으로 함께 성장하는 즐거움을 느끼고 있습니다!</p>
      </div>
    </section>
  );
}

export default Introduce;
