import React, { useEffect, useRef, useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inpuValue = useRef();

  const onBtnClick = () => {
    console.log('버튼클릭');
    setCount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('키입력');
    setText(inpuValue.current.value);
  };

  useEffect(() => {
    console.log('🥇 일반 useEffect');
  });

  useEffect(() => {
    console.log('🏇최초 마운트 시에만 실행 useEffect');
  }, []);

  useEffect(() => {
    console.log('📲 버튼 클릭시에만 작동하는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('🎯 인풋 입력시에만 작동하는 useEffect');
  }, [text]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <br />
      <h1>{text}</h1>
      <input ref={inpuValue} onChange={onInputChange} type="text" />
    </>
  );
}
