import React from 'react';

// 🙁 비효율 적인 방법 : 배열 그대로 작성하는 방법
const ArrayTest = () => {
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
        <b>{users[0].userName}</b> <span>{users[0].eMail}</span>
      </div>
      <div>
      <b>{users[1].userName}</b> <span>{users[1].eMail}</span>
      </div>
      <div>
      <b>{users[2].userName}</b> <span>{users[2].eMail}</span>
      </div>
    </>
  );
}

export default ArrayTest;