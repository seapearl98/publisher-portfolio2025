import React, { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";
import gsap from "gsap";

const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
      title: "미몽",
      src: require(`../assets/images/work8.png`),
      href: "https://xn--h62bnw.kr/",
    },
  ];

  const projectTitleUpRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectTitleUpRef.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: projectTitleUpRef.current,
          start: "top 75%",
        },
        ease: "back.out",
      }
    );
  }, []);

  return (
    <ProjectsWrapper ref={ref}>
      <h3 ref={projectTitleUpRef}>WORK</h3>
      <ul>
        {projectLists.map((list, index) => (
          <ProjectList key={index} list={list} />
        ))}
      </ul>
    </ProjectsWrapper>
  );
});

const ProjectsWrapper = styled.div`
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
  /* background-color: #fff; */
  h3 {
    font-size: 2.75em;
    /* color: #2b2b2b; */
    color: #f2f2f2;
    text-align: center;
    font-weight: 700;
  }

  > ul {
    width: 85%;
    max-width: 1000px;
    margin: 9.375em auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3.75em;
  }

  @media screen and (max-width: 956px) {
    ul {
      flex-direction: column;
      align-items: center;
      font-size: 13px;

      li {
        width: 100%;
      }
    }
  }
`;

export default Projects;
