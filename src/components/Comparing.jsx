import { useRef, useState } from 'react';

export default function Comparing() {
  //값이 변경되면 값을 품고 있으면서 리랜더링도 되어 바로 그려진다.
  const [countState, setCountState] = useState(0);
  //REF는 값이 변해도 리렌더링이 안되고, 값만 품고 있다. 그런데 리랜더링되면 품고 있던 값이 그려진다.
  const countRef = useRef(0);
  //리랜더링되면 초기 값으로 다시 회귀
  let countVar = 0;

  const [render, setRender] = useState(true);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State:', countState);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log('Ref:', countRef);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('variable:', countVar);
  };

  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={countUpState}>State Up!</button>
      <button onClick={countUpRef}>Ref Up!</button>
      <button onClick={countUpVar}>Var Up!</button>
      <button onClick={reRender}>Rerendering</button>
    </div>
  );
}
