import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

// import style
import style from "./../styles/Header.module.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // scroll header
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    const updateHeaderBackground = () => {
      if (window.scrollY > 0) {
        gsap.to("header", { background: "#ffffffc7", boxShadow: "0 0 10px 0 #00000020" });
        gsap.to("header > *", { color: "#333" });
      } else {
        gsap.to("header", { background: "transparent", boxShadow: "none" });
        gsap.to("header > *", { color: "#fff" });
      }
    };
    updateHeaderBackground();
    window.addEventListener("scroll", updateHeaderBackground);

    // current time
    const refreshTime = setInterval(() => {
      const nowdate = new Date();
      document.getElementById("currentInfo").textContent = nowdate.toLocaleString("en", {
        weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", });
    }, 1000);

    // button top
    const btnTop = document.querySelector(".btn_top");
    btnTop.addEventListener("click", () => gsap.to(window, { scrollTo: { y: 0 } }));
    gsap.fromTo(btnTop, { duration: 1, rotate: 540, ease: "none" }, { rotate: 0, scrollTrigger: { trigger: "body", scrub: true } });

    // button email copy
    const btnEmail = document.querySelector(".btn_mail");
    const msgEmail = btnEmail.querySelector("p");
    const email = "limyoursun@naver.com";
    const handleClick = () => {
      navigator.clipboard.writeText(email).then(() => {
        msgEmail.style.opacity = 1;
        setTimeout(() => {
          msgEmail.style.opacity = 0;
        }, 1500);
      });
    };
    btnEmail.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateHeaderBackground);
      btnEmail.removeEventListener("click", handleClick);
      clearInterval(refreshTime);
    };
  }, [location]);

  return (
    <>
      <header className={`${style.wrap} ${isHeaderVisible ? style.visible : style.hidden}`}>
        <ul>
          <li className="btn_mail">Email <p>클립보드에 복사되었습니다.</p></li>
          <li><Link to="https://github.com/limyoursun" target="_blank">Github</Link></li>
          <li><Link to="https://sundefined.tistory.com/" target="_blank">Blog</Link></li>
        </ul>
        <p id="currentInfo">LOADING</p>
      </header>
      <button type="button" className="btn_top">맨 위로 가기</button>
      <span aria-hidden="true"></span>
    </>
  );
}

export default Header;
