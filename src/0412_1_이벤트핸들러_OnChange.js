import React, {useState, useRef} from "react";

const EventHandler = () => {
  const userNameInput = useRef(null);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUserName = e => setUserName(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    // input 창을 지우기 위해 빈 값 지정.. -> 비워진 후 렌더링
    setUserName("");
    setMessage("");
  }
  
  const onKeyEnter = e => {
    if(e.key === "Enter") {
      e.preventDefault();
      alert(userName + " : " + message);
      setUserName("");
      setMessage("");
      userNameInput.current.focus();
    }
  }

  return (
    <>
      <h1>이벤트 연습</h1>
      <input type="text" name="userName" placeholder="사용자 이름" value={userName} onChange={onChangeUserName} ref={userNameInput}/>
      <input type="text" name="message" placeholder="메시지 내용" value={message} onChange={onChangeMessage} onKeyDown={onKeyEnter}/>
      <button onClick={onClick}>확인</button>
    </>
  );
}

export default EventHandler;