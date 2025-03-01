import React from "react";
import styled from "styled-components";
import work1 from "../assets/images/work1.png";
import viewBtn from "../assets/images/viewBtn.png";

function Projects() {
  return (
    <ProjectsWrapper>
      <h3>
        <i>💻</i> 작업한 프로젝트
      </h3>
      <ul>
        <li>
          <div>
            <img src={work1} alt="피자스톰 홈페이지 이미지" />
            <p>see the page</p>
            <p>피자스톰</p>
            <a
              href="https://pizzastorm.co.kr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={viewBtn} alt="" />
            </a>
          </div>
          <div>
            <p>퍼블리싱 기여도 : 100%</p>
            <ul>
              <li>사용한 기능</li>
              <li>GSAP</li>
              <li>Swiper-slide</li>
            </ul>
          </div>
        </li>
      </ul>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  padding-top: 600px;
  padding-bottom: 400px;
  background: linear-gradient(-30deg, #ff8660 0%, #8000ff 99%);
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 500px;
    background: linear-gradient(
      to bottom,
      rgba(22, 21, 19, 1) 0%,
      rgba(22, 21, 19, 0) 100%
    );
  }
  h3 {
    font-size: 44px;
    color: #ccc;
    text-align: center;
  }

  > ul {
    width: 85%;
    max-width: 1000px;
    margin: 200px auto;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:first-child {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 60%;
        max-width: 450px;
        height: 350px;
        overflow: hidden;

        background-color: #2a2a2a;
        border-radius: 18px;

        img {
          height: 70%;
        }
        p {
          padding-left: 40px;
          margin-top: 15px;
          color: #aaa;
          font-family: "Pretendard";
          font-weight: 700;
          font-size: 18px;
        }
        p:nth-of-type(2) {
          margin-top: 10px;
          font-size: 28px;
          color: #fff;
        }

        a {
          position: absolute;
          right: 40px;
          bottom: 40px;
          width: 20px;
          img {
            width: 100%;
          }
        }
        @media screen and (max-width: 1000px) {
          width: 450px;
        }
      }

      div:nth-child(2) {
        flex: 1;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10%;
        color: #1a1a1a;
        p {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -0.07em;
          word-break: keep-all;
        }

        ul {
          margin-top: 25px;
          font-size: 20px;
        }
        li {
          font-weight: 700;
        }

        li:first-child {
          margin-bottom: 15px;
          font-size: 24px;
        }
      }
      @media screen and (max-width: 533px) {
        flex-direction: column;
        align-items: center;
        div {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
`;

export default Projects;
