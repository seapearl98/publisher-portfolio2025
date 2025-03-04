import React, { forwardRef } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import MarqueeImg from "./MarqueeImg";

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

  return (
    <SkillsWrapper ref={ref}>
      <h3>
        <i>🛠️</i> 이러한 기술을 사용할 줄 알아요
      </h3>
      <SkillsUl>
        <li>
          <MarqueeWrapper>
            {imageList01.map((src, index) => (
              <MarqueeImg key={index} src={src} />
            ))}
            {imageList01.map((src, index) => (
              <MarqueeImg key={index} src={src} />
            ))}
          </MarqueeWrapper>
        </li>
      </SkillsUl>
      <h3>
        <i>🪛</i> 이러한 기술을 사용해 봤어요
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "50px",
        }}
      >
        {imageList02.map((src, index) => (
          <MarqueeImg key={index} src={src} />
        ))}
      </div>
    </SkillsWrapper>
  );
});

const SkillsWrapper = styled.div`
  width: 75%;
  max-width: 1200px;

  margin: 400px auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #ccc;
  h3 {
    font-size: 32px;
    vertical-align: middle;
    i {
      margin-right: 8px;
    }
  }
`;

const SkillsUl = styled.ul`
  width: 100%;
  height: 80px;
  margin-top: 50px;
  margin-bottom: 400px;

  li {
    position: relative;
    width: 100%;
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
  }
`;

const MarqueeWrapper = styled(Marquee)`
  width: 100%;
`;

export default Skills;
