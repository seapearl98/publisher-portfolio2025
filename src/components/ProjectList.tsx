import React from "react";
import viewBtn from "../assets/images/viewBtn.png";
import styled from "styled-components";

function ProjectList({ list }) {
  return (
    <ProjectListWrapper>
      <a href={list.href} target="_blank" rel="noreferrer">
        <div className="default_layer">
          <img
            className="thumb"
            src={list.src}
            alt={`${list.title} 홈페이지 이미지`}
          />
          <div className="explan">
            <div>
              <p>see the page</p>
              <p>{list.title}</p>
            </div>
            <img src={viewBtn} alt={`${list.title} 홈페이지 이동 버튼`} />
          </div>
        </div>
        <HoverLayer>
          <p className="hover_title">퍼블리싱 기여도: {list.cont}%</p>
          <ul>
            {list.work.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </HoverLayer>
      </a>
    </ProjectListWrapper>
  );
}

const ProjectListWrapper = styled.li`
  display: flex;
  align-items: center;
  width: calc(50% - 30px);

  > a {
    position: relative;
    width: 100%;
    > .default_layer {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 100%;
      aspect-ratio: 9.5 / 7;
      background-color: #2a2a2a;
      border-radius: 1.125em;
      filter: drop-shadow(0px 15px 15px rgba(0, 0, 0, 0.5));
      font-size: 1em;

      .thumb {
        height: 70%;
      }

      > .explan {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        img {
          width: 1.5em;
        }
      }

      p {
        color: #aaa;
        font-family: "Pretendard";
        font-weight: 700;
        font-size: 1.125em;
      }
      p:nth-of-type(2) {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 1.75em;
        color: #fff;
      }

      @media screen and (min-width: 1500px) {
        font-size: 18px;
      }

      @media screen and (max-width: 767px) {
        li {
          width: 100%;
        }
      }
    }
  }
`;

const HoverLayer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.75);
  padding: 40px 30px;
  box-sizing: border-box;
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.03em;
  border-radius: 1.125em;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  .hover_title {
    font-size: 36px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
    font-size: 20px;
    font-weight: 500;

    li {
      position: relative;
      padding-left: 16px;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 8px;
        height: 2px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
`;

export default ProjectList;
