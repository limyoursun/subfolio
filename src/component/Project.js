import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import style from "./../styles/Project.module.css";

gsap.registerPlugin(ScrollTrigger, SplitType);

const baseUrl = "https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/refs/heads/main/subtfolio/";

function Project({
  nameAbbr,
  bg,
  summary,
  client,
  period,
  keyword,
  name,
  url,
  duties,
  story,
  images,
}) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const imageElements = document.querySelectorAll('.detail img');
      const allLoaded = Array.from(imageElements).every(img => img.complete);
      return allLoaded;
    };

    const interval = setInterval(() => {
      if (checkImagesLoaded()) {
        setImagesLoaded(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    if (imagesLoaded) {
      function top_centered(num) {
        return "'top " + num + "%'";
      }
      gsap.to(".info_l", {
        scrollTrigger: {
          trigger: ".info_l",
          start: `${top_centered(15)} top`,
          end: "bottom bottom",
          scrub: 0.7,
          pin: true,
        },
      });
      gsap.to(".screen_pin", {
        scrollTrigger: {
          trigger: ".screen_pin",
          start: `${top_centered(40)} center`,
          pin: true,
          scrub: 0.7,
          markers: true,
        },
      });

      const ourText = new SplitType("span.tit", { types: "chars" });
      const chars = ourText.chars;
      gsap.fromTo(
        chars,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.03, duration: 1, ease: "power4.out" }
      );
      gsap.fromTo(
        ".img_tit",
        { width: "0", height: "0" },
        {
          width: "100%",
          height: "100%",
          duration: 1.3,
          delay: 0.2,
          ease: "back.inOut",
        }
      );

      gsap.fromTo(
        ".title_info > *",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.3,
          delay: 0.7,
          ease: "power4.inOut",
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, [imagesLoaded]);

  return (
    <section className={style.wrap}>
      <div
        className={style.title}
        style={{ background: `${bg[1]}`, backgroundSize: "cover" }}
      >
        <div className="img_tit" style={{ background: `${bg[0]}` }} />
        <h2>
          {name.split("").map((title, index) => (
            <span key={index} className="tit">{title}</span>
          ))}
        </h2>
        <div className={`${style.title_info} title_info`}>
          <div>
            <dl>
              <dt>Client</dt>
              <dd>{client}</dd>
              <dt>Period</dt>
              <dd>{period}</dd>
              <dt>Keyword</dt>
              <dd>
                {keyword.map((keyword, index) => (
                  <div key={index}>{keyword}</div>
                ))}
              </dd>
            </dl>
            <Link to={url} target="_blank" className="btn_arrow">
              <span>Go to the Site</span>
              <em aria-hidden="true">이동 화살표</em>
            </Link>
          </div>
          <div>
            <p>{summary}</p>
          </div>
        </div>
      </div>

      <div className={`${style.info} detail`}>
        <div className="info_l">
          <ol>
            <li>
              <h4>Brief</h4>
              <p>&nbsp;{duties}</p>
            </li>
            <li>
              <h4>Story</h4>
              {story.map((story, index) => (
                <p key={index}>&nbsp;{story}</p>
              ))}
            </li>
          </ol>
        </div>
        <div>
          <img src={`${baseUrl}img_${nameAbbr}_1.png`} alt={images[0][1]} />
          {images.slice(3, 5).map((img, index) => img[0] && (
            <img key={index} src={`${baseUrl}img_${nameAbbr}_detail_${index + 1}.png`} alt={img[1]} />
          ))}
        </div>
      </div>
      <div className={`${style.screen}`}>
        <div className="screen_pin">
          <div>
            <p>TO GET MORE Information</p>
            <p>프로젝트의 더 다양한 페이지 디자인을 확인하세요</p>
          </div>
        </div>
        {images.slice(5, 9).map((img, index) => img[0] && (
          <img key={index}
            src={`${baseUrl}img_${nameAbbr}_more_${index + 1}.png`}
            alt={img[1]}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;
