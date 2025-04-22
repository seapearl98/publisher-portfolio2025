import React, { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import MarqueeImg from "./MarqueeImg";
import gsap from "gsap";
import { FaHtml5 } from "react-icons/fa";

const Skills = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const images = require.context(
    "../assets/marquee",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const imageList01: string[] = Array.from({ length: 14 }, (_, i) =>
    images(`./logo${i + 1}.png`)
  );

  // const imageList02: string[] = Array.from({ length: 5 }, (_, i) =>
  //   images(`./logo${i + 10}.png`)
  // );

  const bounceRef01 = useRef(null);

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
  }, []);

  return (
    <SkillsWrapper ref={ref}>
      <h3 ref={bounceRef01}>SKILL</h3>
      <MarqueeWrapper>
        {imageList01.map((src, index) => (
          <MarqueeImg key={index} src={src} />
        ))}
      </MarqueeWrapper>
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
  color: #ccc;
  h3 {
    font-size: 2em;
    vertical-align: middle;
    i {
      margin-right: 8px;
    }
  }

  h3:nth-of-type(2) {
    margin-top: 400px;
  }

  @media screen and (max-width: 956px) {
    font-size: 13px;
    width: 85%;
    text-align: center;
    align-items: center;
  }
`;

const MarqueeWrapper = styled(Marquee)`
  width: 100%;
  margin-top: 50px;
  img {
    width: 84px;
    height: 84px;
    margin-right: 12px;
  }
`;

export default Skills;
