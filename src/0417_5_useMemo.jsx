// useMemo : React 컴포넌트의 성능을 최적화하기 위해 사용 됩니다. (이전에 계산된 값을 재사용할 수 있도록 해주는 Hook)
// React 컴포넌트에서 렌더링하는 동안 컴포넌트의 상태나 props가 변경되면 해당 컴포넌트와 하위 컴포넌트들이 다시 렌더링 되며, 이 때 불필요한 렌더링이 발생할 수 있으며 이는 성능 문제를 야기할 수 있습니다.
// useMemo(계산하는 함수, 의존성 배열)
import React, { useMemo, useState } from "react";

// 일반적인 구현 방식
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = e => setNumber(e.target.value);
  const onInsert = () => {
    // 현재 입력 받은 숫자를 기존의 리스트에 추가(concat으로 추가 했으므로 새로운 배열이 생성됨. 👉불변성의 원칙)
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }

  const getAverage = numbers => {
    console.log("평균값 계산중..");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a+b, 0);
    return sum / numbers.length;
  }

  const avg = useMemo(() => getAverage(list),[list]);

  return (
    <>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </>
  );
}

export default Average;