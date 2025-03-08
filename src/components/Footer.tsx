import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <p>
          Thanks for watching my portfolio!
          <br />
          Please Contact Here
        </p>
        <span>↓</span>
        <address>gown1977@gmail.com</address>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 12.5em 7.5% 9.375em;
  color: #f3f3f3;
  font-weight: 700;
  text-align: center;

  p {
    font-size: 2.75em;
    color: #e3e3e3;
    line-height: 1.4;
  }

  span {
    display: block;
    margin-top: 30px;
    font-size: 30px;
    animation: bounce 1s ease-out infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(-20%);
    }
    50% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(-20%);
    }
  }

  address {
    margin-top: 30px;
    font-size: 1.5em;
    letter-spacing: 0.1em;
  }

  @media screen and (max-width: 956px) {
    font-size: 13px;
  }
`;

export default Footer;
