import React, {useState} from "react";

// useState : 리액트 훅(hook) 중 하나로 함수형 컴포넌트에서 상태를 관리할 수 있게 해줍니다.
// 상태가 바뀜과 동시에 렌더링을 해줌(자동으로 화면 업데이트) 예. await 상태 변경시 바로 업데이트
const Say = () => {
  const [messages, setMessage] = useState("default");
  const onClickEnter = () => setMessage("안녕하세요.");
  const onClickLeave = () => setMessage("안녕히 가세요.");
  const [colorTest, setColor] = useState("purple");

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button style={{background:"blue" , color:"white", border:"none"}} onClick={()=>setMessage("ㅎㅇㅎㅇ")}>응용해보즈아</button>
      <h1 style={{color : colorTest}}>{messages}</h1>
      <button style={{color:"red"}} onClick={()=>setColor("red")}>빨간색</button>
      <button style={{color:"green"}} onClick={()=>setColor("green")}>초록색</button>
      <button style={{color:"orange"}} onClick={()=>setColor("orange")}>주황색</button>
    </>
  );
}

export default Say;