import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./../styles/Project.module.css";

import img_test1 from "../assets/images/1.png";
import img_test2 from "../assets/images/2.png";
import img_test3 from "../assets/images/3.png";
import img_test4 from "../assets/images/4.png";

function Project({
  client,
  nameAbbr,
  period,
  duties,
  story,
  category,
  name,
  images,
  url,
  bg,
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".detail_wrap", {
      scrollTrigger: {
        trigger: "main",
        start: "1200px 900px",
        markers: true,
        onLeaveBack: () => {
          gsap.to(".detail_wrap", { background: `${bg}`, duration: 1 });
        },
        onEnter: () => {
          gsap.to(".detail_wrap", { background: "transparent", duration: 1 });
        },
      },
    });



    gsap.to(".test", {
      scrollTrigger: {
        trigger: ".test",
        start: "top center",
        pin: true,
        pinSpacing: false ,
        markers: true,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [bg]);

  return (
    <section className={style.wrap}>
      <div className="detail_wrap" style={{ background: `${bg}` }}>
        <img src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`} alt={images[1]}/>
        <img src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`} alt={images[1]}/>
        <img src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`} alt={images[1]}/>
      </div>
      <div className={style.info}>
        <div>
          <h2>{name}</h2>
          <dl>
            <dt>Client</dt>
            <dd>{client}</dd>
            <dt>Date</dt>
            <dd>{period}</dd>
            <dt>Category</dt>
            {category.map((category) => (
              <dd>&nbsp;{category}</dd>
            ))}
          </dl>
          <Link to={url} target="_blank" className="btn_arrow">
            <span>이동하기</span>
            <em aria-hidden="true">이동 화살표</em>
          </Link>
        </div>
        <ol>
          <li>
            <h4>Brief</h4>
            <p>&nbsp;{duties}</p>
          </li>
          <li>
            <h4>Story</h4>
            {story.map((story) => (
              <p>&nbsp;{story}</p>
            ))}
          </li>
        </ol>
      </div>
      <div className={`${style.test_wrap} test_wrap`}>
        <div className="test">
          <div>
            <p>TO GET MORE Information</p>
            <p>프로젝트의 더 다양한 페이지 디자인을 확인하세요</p>
          </div>
        </div>
        <img src={img_test1} />
        <img src={img_test2} />
        <img src={img_test3} />
        <img src={img_test4} />
      </div>
      <p>&nbsp;{duties}</p><p>&nbsp;{duties}</p><p>&nbsp;{duties}</p><p>&nbsp;{duties}</p>
      <img src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`} alt={images[1]}/>
      <img src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`} alt={images[1]}/>
      <img src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`} alt={images[1]}/>

    </section>
  );
}

export default Project;
