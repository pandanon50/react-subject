import React, { useState } from "react";
import { Button, Slider } from "antd";

const Filter = () => {
  const [value, setValue] = useState({
    min: 0,
    max: 0,
  });
  const onValueChange = (value) => {
    setValue({
      min: value[0],
      max: value[1],
    });
  };
  const onClcik = () => {};
  return (
    <div style={{ width: "60%" }}>
      <span>ABS Filter :</span>
      <Slider onChange={onValueChange} range defaultValue={[20, 50]} />
      <div>minimum : {value.min}</div>
      <div>maximum : {value.max}</div>
      <Button onClick={onClcik}>검색</Button>
    </div>
  );
};
export default Filter;
