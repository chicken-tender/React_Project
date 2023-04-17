// useCallback : 렌더링 최적화를 위해 사용, 렌더링을 최적화해야 할 상황에서 사용하며, 만들어놓은 함수를 재사용하는 방법
// useRef : DOM 요소에 직접 접근할 때 사용, input 요소에 대한 상호작용 등에 사용..
import React, { useCallback, useMemo, useState, useRef } from "react";

const getAverage = numbers => {
  console.log("평균값 계산중..");
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a+b, 0);
  return sum / numbers.length;
}

const Average2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 빈 배열을 넣으면 처음 렌더링 될 때만 함수 호출



  const onInsert = useCallback(() => {
    // 현재 입력 받은 숫자를 기존의 리스트에 추가(concat으로 추가 했으므로 새로운 배열이 생성됨. 👉불변성의 원칙)
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list),[list]);

  return (
    <>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
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

export default Average2;