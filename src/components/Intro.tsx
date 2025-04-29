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
        안녕하세요.
        <br />
        2년차 웹 퍼블리셔 이해주입니다.
      </h2>
      <p ref={upRef02}>
        다양한 웹사이트를 구축하며,{" "}
        <em>사용자 경험을 고려한 UI와 유지보수를 위한 효율적인 코드 작성</em>
        을 고민했습니다.
        <br />
        작은 부분도 놓치지 않고{" "}
        <em>사용자에게 더 나은 경험을 제공하는 웹 퍼블리셔</em>가 되겠습니다.
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
  padding-top: 70px;
  box-sizing: border-box;
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
    max-width: 900px;
    margin: 0 auto;
    margin-top: 3.8125em;
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
    height: auto;
    padding: 150px 0;
    justify-content: start;
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

  @media screen and (max-width: 956px) {
    font-size: 13px;
    width: 18em;
    height: 18em;
  }
`;

export default Intro;
