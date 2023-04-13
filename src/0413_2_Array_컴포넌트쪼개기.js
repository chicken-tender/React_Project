import React from 'react';

// 😃 컴포넌트를 만들고 props로 전달하기
const User = (props) => {

  return (
    <>
      <b>{props.user.userName}</b> <span>{props.user.eMail}</span>
    </>
  );
}

const ArrayTest2 = () => {
  const users = [
    {
      id: 100,
      userName: 'Karly',
      eMail: 'king@naver.com'
    },
    {
      id: 200,
      userName: 'Elastine',
      eMail: 'hoho@gmail.com'
    },
    {
      id: 300,
      userName: 'Kim',
      eMail: 'kim@kakao.com'
    }
  ];
  
  return (
    <>
      <div>
        <User user={users[0]}/>
      </div>
      <div>
        <User user={users[1]} />
      </div>
      <div>
        <User user={users[2]} />
      </div>
    </>
  );
}

export default ArrayTest2;