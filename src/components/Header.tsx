import styled from "styled-components";
import bi from "../assets/images/bi.svg";
import React from "react";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderImg src={bi} alt="" />
      <HeaderUl>
        <li>Intro</li>
        <li>Skills</li>
        <li>Projects</li>
      </HeaderUl>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
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
