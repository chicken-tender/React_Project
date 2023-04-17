import React, { useState, useEffect } from "react";

const UseEffectCnt = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]); // count 값이 바뀔 때마다 콜백함수 실행
  // useEffect는 useState와 별개로 실행됨. 화면이 그려진 후 의존성 배열의 값이 바뀔 때 실행.

  return (
    <>
      <p>You Clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  );
}

export default UseEffectCnt;