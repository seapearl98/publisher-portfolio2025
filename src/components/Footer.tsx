import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <p>Thanks for watching my portfolio!</p>
        <p>작업물이 마음에 드셨다면, 연락주세요!</p>
      </div>
      <address>
        <i>📬</i>: gown1977@gmail.com
      </address>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 50px 12.5%;
  color: #f3f3f3;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  p:nth-of-type(1) {
    font-size: 44px;
    color: #e3e3e3;
    line-height: 1.2;
  }

  p:nth-of-type(2) {
    margin-top: 20px;
    font-size: 32px;
    line-height: 1.5;
  }

  address {
    display: flex;
    align-items: center;
    font-size: 24px;
    white-space: nowrap;
    i {
      font-size: 36px;
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    address {
      margin-top: 35px;
    }
  }
`;

export default Footer;
