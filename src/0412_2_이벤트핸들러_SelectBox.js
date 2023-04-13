import React, {useState} from "react";

// Select 콤보 박스 사용하기
const FruitSelect = () => {
  const [value, setValue] = useState("🍇");
  
  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    alert("선택한 과일 : " + value);
    e.preventDefault(); // ✨ 창이 새로고침 되는 것을 막음.
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요.🩷 <br />
        <select value={value} onChange={handleChange}>
          <option value="apple">🍎</option>
          <option value="orange">🍊</option>
          <option value="banana">🍌</option>
          <option value="kiwi">🥝</option>
          <option value="blueberry">🫐</option>
          <option value="grape">🍇</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default FruitSelect;