import {useEffect} from "react";
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import SplitType from 'split-type'
import {ScrollTrigger} from "gsap/ScrollTrigger";
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
  name, 
  images, 
  url, 
  thumb,
  category,
  bg,
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitType);
    gsap.to(".detail_wrap", {scrollTrigger:{trigger:"main", start:"1200px 900px",
        onLeaveBack:() => {gsap.to(".detail_wrap", {background:`${bg}[0]`,  duration:1})}, 
        onEnter:() => {gsap.to(".detail_wrap", {background:"transparent",  duration:1})}
    }, 
  });
    // pin contents
    function top_centered(num){return "'top " + num + "%'"}
    gsap.to(".more", {scrollTrigger:{trigger:".more", start:`${top_centered(40)} center`, pin:true, markers:true}});
    gsap.to(".tett", {scrollTrigger:{trigger:".tett", start:`${top_centered(15)} top`, end:"bottom bottom", pin:true}});

    // title animation
    const ourText = new SplitType('span.tit', {types:'chars'});
    const chars = ourText.chars;
    gsap.fromTo( chars, {y:200, opacity:0}, {y:0, opacity:1, stagger:0.1, duration:4, ease:'power4.out'});
    gsap.fromTo(".img_tit", {width:"0", height:"0"}, {width:"100%", height:"100%", duration: 4, delay: 0.5, ease:'back.inOut'});

    const ourText2 = new SplitType('.ttt > p', {types:'lines'});
    const lines = ourText2.lines;
    gsap.fromTo( lines, {y:100, opacity:0}, {y:0, opacity:1, stagger:0.1, duration:5, delay:4, ease:'power4.out'});

    return () => {ScrollTrigger.getAll().forEach((trigger) => trigger.kill())};
}, [thumb]);

  return (
    <section className={style.wrap}>
      <div className={`${style.title} detail_wrap`} style={{background:`${bg[0]}`}}>
        <div>
          <h2>
            {name.split("").map((title) => (
              <span className="tit">{title}</span>
            ))}
          </h2>
          <img className="img_tit" src={`${bg[1]}`} alt={images[1]}/>
        </div>
        <div className="ttt">
          <p>L’agence spécialisÉe en</p>
          <p>ÉvÈnementiel culinaire de</p>
          <p>(trÈs) bon goÛt</p>
        </div>
        <Link to={url} target="_blank" className="btn_arrow">
          <span>Contactez-nous</span>
          <em aria-hidden="true">이동 화살표</em>
        </Link>
      </div>
      <div className={`${style.info} detail`}>
        <div className="tett">
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
        <div>
        <img
          src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`}
          alt={images[1]}
        />
        <img
          src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`}
          alt={images[1]}
          />
        <img
          src={`https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/img_${nameAbbr}_1.png`}
          alt={images[1]}
        />
        </div>
      </div>
      <div className={`${style.more_wrap}`}>
        <div className="more">
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
    </section>
  );
}

export default Project;
