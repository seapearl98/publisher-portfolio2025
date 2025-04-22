import React from "react";
import styled from "styled-components";
import sideProjectImg from "../assets/images/side_project.png";

function SideProject(props) {
  return (
    <Wrapper>
      <h3>Side Project</h3>
      <div>
        <div className="img_wrap">
          <img src={sideProjectImg} alt="" />
        </div>
        <div>
          <ul>
            <li>
              <h4>
                SoJazzy: <br />
                <span>재즈음악 및 백색소음 재생</span>
              </h4>
              <SubTitle>
                react 및 typescript 연습을 위해 제작한 음악 플레이 사이트입니다.
              </SubTitle>
            </li>
            <li>
              <DescTitle>주요기능</DescTitle>
              <DescLists>
                <li>API를 이용한 실시간 음악 데이터 활용</li>
                <li>재즈 음악 재생 및 조작</li>
                <li>백색 소음 버튼 클릭 시 재생 및 조절</li>
                <li>로컬스토리지 활용으로 사용자의 마지막 곡 상태 유지</li>
              </DescLists>
            </li>
          </ul>
          <a href="https://seapearl98-self-develope.tistory.com/15">
            작업과정: see Tistory
          </a>
          <a href="https://github.com/seapearl98/SoJazzy">see github</a>
          <a href="https://seapearl98.github.io/SoJazzy/">see the page</a>

          <Caution>* 아직 제작 과정에 있습니다</Caution>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 200px;
  color: #ccc;
  h3 {
    margin-bottom: 50px;
    font-size: 2.75em;
    color: #f2f2f2;
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 60px;
    .img_wrap {
      width: 350px;
      border-radius: 40px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }

    h4 {
      font-size: 1.75em;
      line-height: 1.4;
      color: #f2f2f2;
    }

    a {
      display: inline-block;
      margin-top: 1.875em;
      margin-right: 0.75em;
      padding: 0.5em 0.875em;
      background: linear-gradient(to top, #2a2a2a 80%, #6d6d6d 100%);
      font-size: 1em;
      font-weight: 700;
      color: #f3f3f3;
      border-radius: 2.1875em;
    }
  }
  @media screen and (max-width: 974px) {
    > div {
      flex-direction: column;
      gap: 45px;
      .img_wrap {
        display: flex;
        align-items: center;
        aspect-ratio: 3 / 2;
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 956px) {
    font-size: 13px;
  }
`;

const SubTitle = styled.p`
  margin-top: 1.25em;
  font-size: 1.25em;
  letter-spacing: -0.03em;
  line-height: 1.5;
  color: #eee;
`;

const DescTitle = styled.p`
  margin-top: 1.25em;
  font-size: 1.125em;
  font-weight: 700;
`;

const DescLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.9375em;
  margin-top: 1.25em;
  li {
    position: relative;
    font-size: 1em;
    padding-left: 0.9375em;
    &::before {
      content: "";
      clear: both;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0.25em;
      height: 0.25em;
      margin: auto 0;
      background-color: #ccc;
      border-radius: 50%;
    }
  }
`;

const Caution = styled.p`
  margin-top: 1.875em;
  font-size: 0.875em;
  font-weight: bold;
  letter-spacing: -0.03em;
  color: #757575;
`;

export default SideProject;
