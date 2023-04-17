// * React 함수형 컴포넌트에서 ✨생명주기 메소드를 대체✨하는 React Hook 중 하나 (필수 사용 hook)
// * useEffect는 컴포넌트가 렌더링 될 때마다 특정 동작을 수행하거나, 특정 상태가 업데이트 될 때마다 동작을 수행
// * 첫번째 인자로 콜백 함수를 받고, 이 콜백 함수는 컴포넌트가 마운트(화면에 그려질 때) 되거나 언마운트(화면에서 사라지는) 될 때, 그리고 의존성 배열에 전달된 상태가 변경 될 때 마다 실행
// ...흠흠..🤮
import React, { useState, useEffect } from "react";

const UseEffectInfo = () => {
  const [name, setName] = useState(""); // 이름이 바뀔 때마다 화면을 렌더링 하기 위한
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료 되었습니다.");
    console.log(name, nickname);
  }, []); 

  const onChangeName = e => setName(e.target.value);
  const onChangeNickname = e => setNickname(e.target.value);

  return (
    <>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <p>이름은 <b>{name}</b></p>
        <p>닉네임은 <b>{nickname}</b></p>
      </div>
    </>
  );
}

export default UseEffectInfo;

