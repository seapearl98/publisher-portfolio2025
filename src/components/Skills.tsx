import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import MarqueeImg from "./MarqueeImg";
import { useEffect, useState } from "react";

function Skills() {
  const serverUrl = process.env.REACT_APP_API_URL;
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (!serverUrl) {
      console.error("서버 URL이 설정되지 않았습니다.");
      return;
    }

    fetch(`${serverUrl}/api/images`)
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("이미지 목록 불러오기 실패:", error));
  }, [serverUrl]);

  console.log(serverUrl, images);

  return (
    <SkillsWrapper>
      <h3>
        <i>🛠️</i> 이러한 기술을 사용할 줄 알아요
      </h3>
      <SkillsUl>
        <li>
          <MarqueeWrapper>
            {images.map((image, index) => (
              <MarqueeImg key={index} src={`${serverUrl}/images/${image}`} />
            ))}
            {images.map((image, index) => (
              <MarqueeImg key={index} src={`${serverUrl}/images/${image}`} />
            ))}
          </MarqueeWrapper>
        </li>
        {/* <li>
          <p>
            이젠아카데미컴퓨터학원에서 <br />
            <em>UI/UX 웹&앱 디자인 & 프론트엔드(React.js)과정</em>을 수료했어요.
          </p>
          <span>(2022.07 - 2022.12)</span>
        </li> */}
      </SkillsUl>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 75%;
  max-width: 1000px;

  margin: 200px auto 0;
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
