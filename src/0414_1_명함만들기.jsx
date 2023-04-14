import React, { useState } from 'react';
// 📚 연습문제 : 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력하기

// 7. 화면에 출력할 명함 컴포넌트 만들기
const NameCard = ({member}) => {

  return (
    <>
      <h3>명함 정보 출력</h3>
      <p>이름 : {member.name}</p>
      <p>직책 : {member.position}</p>
      <p>회사명 : {member.company}</p>
      <p>주소 : {member.address}</p>
      <p>이메일 : {member.email}</p>
      <p>핸드폰 : {member.phone}</p>
    </>
  );
}

const UserState = () => {
  const [member, setMember] = useState({ // 1. 명함 정보 저장을 위한 객체 리터럴 생성
    name:"", 
    position:"", 
    company:"", 
    address:"", 
    email:"", 
    phone:""
  });
  
  const [submit, setSubmit] = useState(false);  // 2. 제출을 누르기 전까지는 안나오게 하려고 boolean 타입으로 설정
  
  // 3. member 객체(위에 빈 공간의 객체)를 펼치고, name에 이벤트가 일어난 값을 넣는 것 - 다른 항목 이하 동일
    // 이벤트 핸들러: onChange, onClick ...를 이용해서 값을 받아오기
  const onChangeName = (e) => setMember({...member, name: e.target.value});
  const onChangePosition = (e) => setMember({...member, position: e.target.value});
  const onChangeCompany = (e) => setMember({...member, company: e.target.value});
  const onChanageAddress = (e) => setMember({...member, address: e.target.value});
  const onChangeEmail = (e) => setMember({...member, email: e.target.value});
  const onChangePhone = (e) => setMember({...member, phone: e.target.value});

  // 4. 값을 입력하고 제출 버튼을 눌렀을 때 submit 상태를 true로 변경
  const onSubmit = () => {
    setSubmit(true);
  }

  // 5. 위에 만든 것들을 적절한 위치에 넣기
  return (
    <>
      <h1>회원 정보</h1>
      <input type="text" placeholder='이름' value={member.name} onChange={onChangeName}/><br />
      <input type="text" placeholder='직책' value={member.position} onChange={onChangePosition}/><br />
      <input type="text" placeholder='회사명' value={member.company} onChange={onChangeCompany}/><br />
      <input type="text" placeholder='주소' value={member.address} onChange={onChanageAddress}/><br />
      <input type="text" placeholder='메일' value={member.email} onChange={onChangeEmail}/><br />
      <input type="text" placeholder='핸드폰' value={member.phone} onChange={onChangePhone}/>
      <button onClick={onSubmit}>제출</button>
      
      {/* 6. 컴포넌트 넣어서 조건부 렌더링 */}
      {/* member={member} <= member는 props 이름이라 임의로 설정 가능, {member}는 객체 리터럴 이름 */}
      {submit && <NameCard member={member}/>}
    </>
  );
}

export default UserState;