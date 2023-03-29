import { useRef, useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요.');

  const inputValue = useRef();

  // const onChangeText = (el) => {
  //   const inputText = el.target.value;
  //   setText(inputText);
  // };

  const onChangeRef = () => {
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
