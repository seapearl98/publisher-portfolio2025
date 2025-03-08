import React, { forwardRef, useEffect, useRef } from "react";
import profile from "../assets/images/profile.webp";
import styled from "styled-components";
import gsap from "gsap";

const Intro = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const upRef = useRef(null);
  const upRef01 = useRef(null);
  const upRef02 = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({});
    tl.fromTo(
      upRef.current,
      { opacity: 0, y: 50 },
      { y: 0, opacity: 1, duration: 1 }
    );
    tl.fromTo(
      upRef01.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6"
    );
    tl.fromTo(
      upRef02.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6"
    );
  }, []);

  return (
    <IntroWrapper ref={ref}>
      <ProfileCircle ref={upRef}>
        <img src={profile} alt="" />
      </ProfileCircle>
      <h2 ref={upRef01}>
        반갑습니다.
        <br />
        2년차 웹 퍼블리셔 이해주입니다.
      </h2>
      <p ref={upRef02}>
        <em>1년 6개월</em> 동안 다수의 웹사이트 UI를 구축하며 디자인을 코드로
        구현하면서 역동적이고 감각적인 웹을 만드는 데 집중했습니다. 함께 일하게
        된다면,{" "}
        <em>구현의 가능성을 최대한 열어두고 더 나은 인터랙션을 탐구하는</em>{" "}
        퍼블리셔가 될 것을 약속드립니다.
      </p>
    </IntroWrapper>
  );
});

const IntroWrapper = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  h2,
  p {
    text-align: center;
    color: #fff;
    font-family: "Pretendard";
  }
  h2 {
    margin-top: 62px;
    font-size: 2.8125em;
    font-weight: 700;
    line-height: 1.4;
  }
  p {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 61px;
    color: #797979;
    font-size: 1.25em;
    line-height: 1.75;
    em {
      color: #eee;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 956px) {
    font-size: 13px;
    width: 85%;
  }
`;

const ProfileCircle = styled.div`
  width: 25em;
  height: 25em;
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(-30deg, #ff8660 0%, #8000ff 99%);
  img {
    width: 100%;
  }
`;

export default Intro;
