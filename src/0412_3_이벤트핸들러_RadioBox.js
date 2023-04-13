import React, {useState} from "react";

const RadioButton = () => {
  const [value, setValue] = useState("");

  const handleChange = e => setValue(e.target.value);

  return (
    <div>
      <input type="radio" name="fruits" value="🍎" onChange={handleChange} />
      <label>🍎</label>
      <br />
      <input type="radio" name="fruits" value="🍊" onChange={handleChange} />
      <label>🍊</label>
      <br />
      <input type="radio" name="fruits" value="🍌" onChange={handleChange} />
      <label>🍌</label>
      <br />
      <input type="radio" name="fruits" value="🥝" onChange={handleChange} />
      <label>🥝</label>
      <br />
      <p>선택한 과일은 [{value}] 입니다.</p>
    </div>
  );
}

export default RadioButton;