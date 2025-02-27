import React from "react";
import profile from "../assets/images/profile.webp";
import styled from "styled-components";

function Intro() {
  return (
    <IntroWrapper>
      <ProfileCircle>
        <img src={profile} alt="" />
      </ProfileCircle>
      <h2>
        반갑습니다.
        <br />
        2년차 웹 퍼블리셔 이해주입니다.
      </h2>
      <p>
        <em>1년 6개월</em> 동안 다수의 웹사이트 UI를 구축하며 디자인을 코드로
        구현하면서
        <br />
        역동적이고 감각적인 웹을 만드는 데 집중했습니다.
        <br />
        함께 일하게 된다면,{" "}
        <em>
          구현의 가능성을 최대한 열어두고 <br />더 나은 인터랙션을 탐구하는
        </em>{" "}
        퍼블리셔가 될 것을 약속드립니다.
      </p>
    </IntroWrapper>
  );
}

const IntroWrapper = styled.div`
  padding-top: 200px;
  h2,
  p {
    text-align: center;
    color: #fff;
    font-family: "Pretendard";
  }
  h2 {
    margin-top: 82px;
    font-size: 45px;
    font-weight: 700;
    line-height: 1.4;
  }
  p {
    margin-top: 41px;
    color: #797979;
    font-size: 20px;
    line-height: 1.5;
    em {
      color: #eee;
      font-weight: 700;
    }
  }
`;
const ProfileCircle = styled.div`
  width: 400px;
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(-30deg, #ff8660 0%, #8000ff 99%);
  img {
    width: 100%;
  }
`;

export default Intro;
