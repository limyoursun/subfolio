import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

// import style
import style from "./Header.module.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation();
  const headerRef = useRef(null);
  const currentInfoRef = useRef(null);
  const btnTopRef = useRef(null);
  const btnEmailRef = useRef(null);
  const msgEmailRef = useRef(null);

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
        gsap.to(headerRef.current, { background: "#ffffffc7", boxShadow: "0 0 10px 0 #00000020" });
        gsap.to(headerRef.current.children, { color: "#333" });
      } else {
        gsap.to(headerRef.current, { background: "transparent", boxShadow: "none" });
        gsap.to(headerRef.current.children, { color: "#fff" });
      }
    };
    updateHeaderBackground();
    window.addEventListener("scroll", updateHeaderBackground);

    // current time
    const refreshTime = setInterval(() => {
      const nowdate = new Date();
      currentInfoRef.current.textContent = nowdate.toLocaleString("en", {
        weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit",
      });
    }, 1000);

    // button top
    const btnTopEl = btnTopRef.current;
    const handleBtnTopClick = () => gsap.to(window, { scrollTo: { y: 0 } });
    btnTopEl.addEventListener("click", handleBtnTopClick);
    gsap.fromTo(btnTopEl, { duration: 1, rotate: 540, ease: "none" }, { rotate: 0, scrollTrigger: { trigger: "body", scrub: true } });

    // button email copy
    const btnEmailEl = btnEmailRef.current;
    const email = "limyoursun@naver.com";
    const handleClick = () => {
      navigator.clipboard.writeText(email).then(() => {
        msgEmailRef.current.style.opacity = 1;
        setTimeout(() => {
          msgEmailRef.current.style.opacity = 0;
        }, 1500);
      });
    };
    btnEmailEl.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateHeaderBackground);
      btnEmailEl.removeEventListener("click", handleClick);
      btnTopEl.removeEventListener("click", handleBtnTopClick);
      clearInterval(refreshTime);
    };
  }, [location]);

  return (
    <>
      <header ref={headerRef} className={`${style.wrap} ${isHeaderVisible ? style.visible : style.hidden}`}>
        <ul>
          <li ref={btnEmailRef}>Email <p ref={msgEmailRef}>클립보드에 복사되었습니다.</p></li>
          <li><Link to="https://github.com/limyoursun" target="_blank">Github</Link></li>
          <li><Link to="https://sundefined.tistory.com/" target="_blank">Blog</Link></li>
        </ul>
        <p ref={currentInfoRef}>LOADING</p>
      </header>
      <button ref={btnTopRef} type="button" className="btn_top">맨 위로 가기</button>
      <span aria-hidden="true"></span>
    </>
  );
}

export default Header;
