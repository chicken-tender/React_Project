import React, {useState} from "react";

/* 📚 연습문제
- 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력
- 명함은 객체 리터럴로 관리
- 입력 값의 변경은 useState 사용
- 제출 버튼 누르면 명함 형태로 출력 */

const NameCard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [inputText, setInputText] = useState("");

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    setUserInfo(userInfo.map(e => e.company));
  }

  return (
    <>
      <input type="text" placeholder="이름" value={inputText} onChange={onChange} /><br />
      <input type="text" placeholder="직책" /><br />
      <input type="text" placeholder="회사명"/><br />
      <input type="text" placeholder="회사 주소"/><br />
      <input type="text" placeholder="이메일"/><br />
      <input type="text" placeholder="전화번호"/><br />
      <button onClick={onClick}>제출</button>

      <div>
        <p>이름 : {userInfo.map(e => e.name)}</p>
        <p>회사 : {userInfo.map(e => e.company)}</p>
      </div>
    </>
  );
}

export default NameCard;