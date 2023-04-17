import React, { useState, useEffect } from "react";

const UseEffectClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 언마운트 되면 interval을 해제
    return() => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>현재 시간은 {time.toLocaleTimeString()}</h1>
    </>
  );
}

export default UseEffectClock;