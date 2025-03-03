import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";

function Projects() {
  const projectLists = [
    {
      title: "피자스톰",
      src: require(`../assets/images/work1.png`),
      href: "https://pizzastorm.co.kr/",
    },
    {
      title: "감성커피",
      src: require(`../assets/images/work2.png`),
      href: "https://xn--439as41bv4jv9f.com/",
    },
    {
      title: "더 진국",
      src: require(`../assets/images/work3.png`),
      href: "https://thejincook.com/",
    },
    {
      title: "한사발포차",
      src: require(`../assets/images/work4.png`),
      href: "https://hansabal.co.kr/",
    },
    {
      title: "부엉이산장",
      src: require(`../assets/images/work5.png`),
      href: "https://www.owlmtcabin-official.com/",
    },
    {
      title: "강탄",
      src: require(`../assets/images/work6.png`),
      href: "https://gangtanfnc.com/",
    },
    {
      title: "청기와타운 영문페이지",
      src: require(`../assets/images/work7.png`),
      href: "https://chungkiwatown.co.kr/en/",
    },
    {
      title: "순정한우",
      src: require(`../assets/images/work8.png`),
      href: "https://gangtanfnc.com/",
    },
  ];

  return (
    <ProjectsWrapper>
      <h3>
        <i>💻</i> 작업한 프로젝트
      </h3>
      <ul>
        {projectLists.map((list, index) => (
          <ProjectList key={index} list={list} />
        ))}
      </ul>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  padding-top: 400px;
  padding-bottom: 200px;
  background: linear-gradient(
    to top,
    #ff8660 0%,
    #8000ff 90%,
    #8000fff2 91%,
    #8000ffb7 93%,
    #8000ff8f 95%,
    #5900b876 97%,
    #5900b83e 98%,
    rgba(22, 21, 19, 1) 100%
  );

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(
      to bottom,
      rgba(22, 21, 19, 1) 0%,
      rgba(22, 21, 19, 0) 100%
    );
    opacity: 0.5;
  }
  h3 {
    font-size: 44px;
    color: #fff;
    text-align: center;
  }

  > ul {
    width: 85%;
    max-width: 1000px;
    margin: 200px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 60px;

    @media screen and (max-width: 533px) {
      flex-direction: column;
      align-items: center;
      div {
        width: 100%;
        height: 300px;
      }
    }
  }
`;

export default Projects;
