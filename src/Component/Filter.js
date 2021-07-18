import React, { useState } from "react";
import { Button, Slider } from "antd";
import { useDispatch } from "react-redux";
import { FILTER_BEER_REQUEST, GET_BEER_REQUEST } from "../Modules/beer";
const Filter = () => {
  const dispatch = useDispatch();
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
  const onClcik = () => {
    dispatch({
      type: FILTER_BEER_REQUEST,
      data: {
        from: value.min,
        to: value.max,
      },
    });
  };

  const onRefresh = () => {
    dispatch({
      type: GET_BEER_REQUEST,
    });
  };

  return (
    <div style={{ width: "60%" }}>
      <span>ABS Filter :</span>
      <Slider onChange={onValueChange} range defaultValue={[20, 50]} />
      <div>minimum : {value.min}</div>
      <div>maximum : {value.max}</div>
      <Button onClick={onClcik}>검색</Button>
      <Button onClick={onRefresh}>원래대로</Button>
    </div>
  );
};
export default Filter;
