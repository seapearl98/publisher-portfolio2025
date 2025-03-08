import React, { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import MarqueeImg from "./MarqueeImg";
import gsap from "gsap";

const Skills = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const images = require.context(
    "../assets/marquee",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const imageList01: string[] = Array.from({ length: 9 }, (_, i) =>
    images(`./logo${i + 1}.png`)
  );

  const imageList02: string[] = Array.from({ length: 5 }, (_, i) =>
    images(`./logo${i + 10}.png`)
  );

  const bounceRef01 = useRef(null);
  const bounceRef02 = useRef(null);
  const bounceRef03 = useRef(null);
  const bounceRef04 = useRef(null);

  useEffect(() => {
    const skillTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: bounceRef01.current,
        start: "top 80%",
      },
    });

    skillTl01.fromTo(
      bounceRef01.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out" }
    );
    skillTl01.fromTo(
      bounceRef02.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out" },
      "-=0.4"
    );

    const skillTl02 = gsap.timeline({
      scrollTrigger: {
        trigger: bounceRef03.current,
        start: "top 80%",
      },
    });

    skillTl02.fromTo(
      bounceRef03.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out" }
    );
    skillTl02.fromTo(
      bounceRef04.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out", stagger: 0.2 },
      "-=0.4"
    );
  }, []);

  return (
    <SkillsWrapper ref={ref}>
      <h3 ref={bounceRef01}>
        <i>🛠️</i> 이러한 기술을 사용할 줄 알아요
      </h3>
      <SkillsUl ref={bounceRef02}>
        <MarqueeWrapper>
          {imageList01.map((src, index) => (
            <MarqueeImg key={index} src={src} />
          ))}
          {imageList01.map((src, index) => (
            <MarqueeImg key={index} src={src} />
          ))}
        </MarqueeWrapper>
      </SkillsUl>
      <h3 ref={bounceRef03}>
        <i>🪛</i> 이러한 기술을 사용해 봤어요
      </h3>
      <SkillsUl
        className="second__skill__ul"
        ref={bounceRef04}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "50px",
        }}
      >
        {imageList02.map((src, index) => (
          <li>
            <MarqueeImg key={index} src={src} />
          </li>
        ))}
      </SkillsUl>
    </SkillsWrapper>
  );
});

const SkillsWrapper = styled.div`
  width: 75%;
  max-width: 1200px;
  padding: 200px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
    align-items: center;
  }
`;

const SkillsUl = styled.ul`
  position: relative;
  width: 100%;
  height: 80px;
  margin-top: 50px;
  margin-bottom: 400px;
  gap: 10px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 30%;
    height: 100%;
    pointer-events: none;
  }

  &::before {
    background: linear-gradient(
      to right,
      rgba(22, 21, 19, 1) 0%,
      rgba(22, 21, 19, 0) 100%
    );
    left: 0;
    z-index: 2;
  }

  &::after {
    background: linear-gradient(
      to left,
      rgba(22, 21, 19, 1) 0%,
      rgba(22, 21, 19, 0) 100%
    );
    right: 0;
    z-index: 1;
  }

  &.second__skill__ul {
    display: flex;
  }

  &.second__skill__ul::before,
  &.second__skill__ul::after {
    display: none;
  }

  li {
    position: relative;
    width: 5em;
    aspect-ratio: 1/1;
    img {
      width: 100%;
      aspect-ratio: 1/1;
    }
  }

  @media screen and (max-width: 956px) {
    font-size: 13px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
  }
`;

const MarqueeWrapper = styled(Marquee)`
  width: 100%;
`;

export default Skills;
