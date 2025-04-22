import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function Experience() {
  const bounceRef01 = useRef(null);
  const bounceRef02 = useRef(null);
  const bounceRef03 = useRef(null);

  useEffect(() => {
    const expTl = gsap.timeline({
      scrollTrigger: {
        trigger: bounceRef01.current,
        start: "top 80%",
      },
    });

    expTl.fromTo(
      bounceRef01.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out" }
    );
    expTl.fromTo(
      bounceRef02.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out" },
      "-=0.4"
    );
    expTl.fromTo(
      bounceRef03.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out" },
      "-=0.4"
    );
  }, []);

  return (
    <ExperienceWrapper>
      <h3 ref={bounceRef01}>WORK EXPERIENCE & EDUCATION</h3>
      <ExpUl>
        <li ref={bounceRef02}>
          <p>2023.06 - 2024.11 --- (주)뷰쓰리</p>
        </li>
        <li ref={bounceRef03}>
          <p>
            <span>2022.07 - 2022.12 ---</span> UI/UX 웹&앱 디자인 &
            프론트엔드(React.js)과정 수료
          </p>
        </li>
      </ExpUl>
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div`
  width: 75%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 0;
  color: #ccc;
  h3 {
    font-size: 2em;
    vertical-align: middle;
    i {
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 956px) {
    font-size: 13px;
    width: 85%;
    /* text-align: center; */
  }
`;

const ExpUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
  li {
    font-size: 1.25em;
    color: #eee;
    line-height: 1.5;
    em {
      font-size: 1.5em;
      font-weight: 700;
      color: #ccc;
    }
    span {
      font-size: 1em;
    }
  }

  @media screen and (max-width: 956px) {
    /* align-items: center; */
    /* text-align: center; */
  }
`;

export default Experience;
