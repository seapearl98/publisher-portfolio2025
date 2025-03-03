import React from "react";
import viewBtn from "../assets/images/viewBtn.png";
import styled from "styled-components";

function ProjectList({ list }) {
  return (
    <ProjectListWrapper>
      <a href={list.href} target="_blank" rel="noreferrer">
        <div>
          <img src={list.src} alt={`${list.title} 홈페이지 이미지`} />
          <p>see the page</p>
          <p>{list.title}</p>
          <BtnIco src={viewBtn} alt={`${list.title} 홈페이지 이동 버튼`} />
        </div>
      </a>
    </ProjectListWrapper>
  );
}

const ProjectListWrapper = styled.li`
  display: flex;
  align-items: center;
  width: calc(50% - 30px);
  a {
    width: 100%;
    div {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 100%;
      background-color: #2a2a2a;
      border-radius: 18px;
      font-size: 16px;

      img:first-child {
        height: 14em;
      }

      p {
        padding-left: 40px;
        margin-top: 10px;
        color: #aaa;
        font-family: "Pretendard";
        font-weight: 700;
        font-size: 1.125em;
      }
      p:nth-of-type(2) {
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 1.75em;
        color: #fff;
      }

      @media screen and (min-width: 1500px) {
        font-size: 18px;
      }
    }
  }
`;

const BtnIco = styled.img`
  position: absolute;
  right: 40px;
  width: 1.5625em;
  bottom: 2em;
`;

export default ProjectList;
