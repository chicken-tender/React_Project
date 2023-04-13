import React from "react";
import './App.css';

// ✨ 배열로 구성된 객체를 전달받아 map으로 화면에 표시하고, 표시된 화면 영역에 이벤트 연결하기
const TableMap = () => {
  const data = [
    {id: 100, name: "Elon", age: 38},
    {id: 200, name: "Skat", age: 25},
    {id: 300, name: "Braven", age: 15}
  ];
  const tableClickEvent = (item) => {
    console.log(item); // 눌렀을 때 특정 페이지(메뉴)로 넘어가는 방법은 '라우터' 할 때 배울 예정
  }
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(item => (
            // ✨ map은 key값 기준으로 내부를 돌기 때문에 반드시 유일한 id값을 넣어줘야 함.
            <tr key={item.id} onClick={()=>tableClickEvent(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TableMap;