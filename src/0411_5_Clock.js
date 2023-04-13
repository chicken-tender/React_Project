import React, {useState} from "react";

const Clock = () => {
  const [currentDate, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  }
  setInterval(tick, 1000);

  return (
    <div>
      <h1>현재 시간을 표시합니다.</h1>
      <h2>현재 시간은 {currentDate.toLocaleTimeString()} 입니다.</h2>
    </div>
  );
}

export default Clock;