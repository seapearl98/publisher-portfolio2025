import styled from "styled-components";
import bi from "../assets/images/bi.svg";
import React, { useRef } from "react";
import gsap from "gsap";

interface HeaderProps {
  goToSection: (sectionRef: React.RefObject<HTMLElement | null>) => void;
  introRef: React.RefObject<HTMLElement | null>;
  experienceRef: React.RefObject<HTMLElement | null>;
  skillsRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
}

const Header: React.FC<HeaderProps> = ({
  goToSection,
  introRef,
  experienceRef,
  skillsRef,
  projectsRef,
}) => {
  return (
    <HeaderWrapper>
      <HeaderImg src={bi} alt="" />
      <HeaderUl>
        <li
          onClick={() => {
            goToSection(introRef);
          }}
        >
          Intro
        </li>
        <li
          onClick={() => {
            goToSection(skillsRef);
          }}
        >
          Skills
        </li>
        <li
          onClick={() => {
            goToSection(projectsRef);
          }}
        >
          Projects
        </li>
      </HeaderUl>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: #222;
  color: #fff;
`;

const HeaderImg = styled.img`
  width: 45px;
  filter: invert(100%);
`;

const HeaderUl = styled.ul`
  display: flex;
  gap: 40px;
  cursor: pointer;
  font-size: 20px;
  li {
    list-style: none;
  }
`;

export default Header;
