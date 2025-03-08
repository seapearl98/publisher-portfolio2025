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
      <h3 ref={bounceRef01}>
        <i>💼</i> 경력 및 관련 활동
      </h3>
      <ExpUl>
        <li ref={bounceRef02}>
          <p>
            <em>주식회사 뷰쓰리</em>에서 <em>1년 6개월</em>간 웹 퍼블리셔로
            근무했어요.
          </p>
          <span>(2023.06 - 2024.11)</span>
        </li>
        <li ref={bounceRef03}>
          <p>
            이젠아카데미컴퓨터학원에서 <br />
            <em>UI/UX 웹&앱 디자인 & 프론트엔드(React.js)과정</em>을 수료했어요.
          </p>
          <span>(2022.07 - 2022.12)</span>
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
    text-align: center;
  }
`;

const ExpUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
  li {
    font-size: 1.25em;
    color: #797979;
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
    align-items: center;
    text-align: center;
  }
`;

export default Experience;
