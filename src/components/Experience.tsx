import styled from "styled-components";

function Experience() {
  return (
    <ExperienceWrapper>
      <h3>
        <i>💼</i> 경력 및 관련 활동
      </h3>
      <ExpUl>
        <li>
          <p>
            <em>주식회사 뷰쓰리</em>에서 <em>1년 6개월</em>간 웹 퍼블리셔로
            근무했어요.
          </p>
          <span>(2023.06 - 2024.11)</span>
        </li>
        <li>
          <p>
            이젠아카데미컴퓨터학원에서 <br />
            <em>UI/UX 웹&앱 디자인 & 프론트엔드(React.js)과정</em>을 수료했어요.
          </p>
          <span>(2022.07 - 2022.12)</span>
        </li>
      </ExpUl>
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div`
  max-width: 75%;
  margin: 200px auto 0;
  color: #ccc;
  h3 {
    font-size: 32px;
    vertical-align: middle;
    i {
      margin-right: 8px;
    }
  }
`;

const ExpUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
  li {
    font-size: 20px;
    color: #797979;
    line-height: 1.5;
    em {
      font-size: 24px;
      font-weight: 700;
      color: #ccc;
    }
    span {
      font-size: 16px;
    }
  }
`;

export default Experience;
