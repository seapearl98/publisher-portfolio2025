import React from "react";
import viewBtn from "../assets/images/viewBtn.png";
import styled from "styled-components";

function ProjectList({ list }) {
  return (
    <ProjectListWrapper>
      <a href={list.href} target="_blank" rel="noreferrer">
        <div>
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
      </a>
    </ProjectListWrapper>
  );
}

const ProjectListWrapper = styled.li`
  display: flex;
  align-items: center;
  width: calc(50% - 30px);

  > a {
    width: 100%;
    > div {
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

export default ProjectList;
