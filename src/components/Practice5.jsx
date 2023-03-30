import { React, useRef } from 'react';

export default function Practice5() {
  const colorValue = useRef();
  const background = useRef();

  const chageColor = () => {
    background.current.style.backgroundColor = colorValue.current.value;
  };

  return (
    <div ref={background}>
      <input ref={colorValue} type="text" />
      <br />
      <button onClick={chageColor}>색 적용</button>
    </div>
  );
}
