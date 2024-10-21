import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import style from "./../styles/Header.module.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Header() {
  useEffect(() => {
    // gsap
    gsap.to("header", {
      scrollTrigger: { trigger: "body", start: "1000px 700px",
        onEnter: () => {
          gsap.to("header", {top: 10, left: 10, background : "#ffffffc7", width:"calc(100% - 20px)", borderRadius : 30, boxShadow:"0 0 10px 0 #00000033"});
          gsap.to("header > *", {color: "#333"});
        },
        onLeaveBack: () => {
          gsap.to("header", {top: 0, left: 0, background : "transparent", width:"100%", borderRadius : 0, boxShadow:"none" });
          gsap.to("header > *", {color: "#fff"});
        }
      },
    });

    // current time
    let monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const refreshTime = setInterval(() => {
      const nowdate = new Date();
      const curHours = String(nowdate.getHours()).padStart(2, "0");
      const curMin = String(nowdate.getMinutes()).padStart(2, "0");
      const curSec = String(nowdate.getSeconds()).padStart(2, "0");
      const curMon = nowdate.getMonth();
      const curDate = nowdate.getDate();
      const curDay = nowdate.getDay();
      const curInfo = document.getElementById("currentInfo");
      curInfo.textContent = `${dayNames[curDay]} ${monthNames[curMon]} ${curDate} ${curHours}:${curMin}:${curSec}`;
      return () => clearInterval(refreshTime);
    }, 1000);

    // top button
    const btnTop = document.querySelector(".btn_top");
    btnTop.addEventListener( "click", () => gsap.to(window, { scrollTo: { y: 0 } }));
    gsap.fromTo( btnTop,{ duration: 1,rotate: 540,ease: "none",}, {rotate: 0, scrollTrigger: {trigger: "body",scrub: true}});

    // email copy button
    const btnEmail = document.querySelector(".btn_mail");
    const msgEmail = btnEmail.querySelector("p");
    if (btnEmail) {
      let email = "limyoursun@naver.com";
      const handleClick = () => {
        navigator.clipboard.writeText(email).then(() => {
          msgEmail.style.opacity = 1;
          setTimeout(() => {
            msgEmail.style.opacity = 0;
          }, 1500)
        });
      };
      btnEmail.addEventListener("click", handleClick);
      return () => {
        btnEmail.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <header className={style.wrap}>
      <ul>
        <li className="btn_mail">Email
          <p>클립보드에 복사되었습니다.</p>
        </li>
        <li><Link to="https://github.com/limyoursun" target="_blank">Github</Link></li>
        <li><Link to="https://sundefined.tistory.com/" target="_blank">Blog</Link></li>
      </ul>
      <p id="currentInfo">LOADING</p>
      <button type="button" className="btn_top">맨 위로 가기</button>
      <span aria-hidden="true"></span>
    </header>
  );
}
export default Header;
