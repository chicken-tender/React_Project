import React from "react";

const MapTest = () => {
  const users = [
    {
      id: 100,
      userName: "Karly",
      eMail: "king@naver.com",
    },
    {
      id: 200,
      userName: "Elastine",
      eMail: "hoho@gmail.com",
    },
    {
      id: 300,
      userName: "Kim",
      eMail: "kim@kakao.com",
    },
  ];
  
  return (
    <>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <p>{user.userName} : {user.eMail}</p>
          </div>
        ))}
    </>
  );
};

export default MapTest;
