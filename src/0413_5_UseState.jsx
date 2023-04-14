import React, { useState } from 'react';

// useState()는 리액트에서 상태(state)를 관리하기 위해 제공되는 훅(hook) 중 하나입니다.
// 상태가 변경될 때마다 컴포넌트가 자동으로 다시 렌더링 됩니다.
// 배열 형태로 반환.. 첫 번째 요소는 현재 상태이고, 두 번째 요소는 상태를 변경하는 함수 입니다.

const Usestate = () => {
  const [value, setValue] = useState(0); // 초기값을 0으로 설정
  
  return (
    <>
      <p>현재 카운트 값은 <b>{value}</b></p>
      <button onClick={() => setValue(value + 1)}>증가</button>
      <button onClick={() => setValue(value - 1)}>감소</button>
    </>
  );
}

export default Usestate;