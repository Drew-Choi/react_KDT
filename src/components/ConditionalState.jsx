import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';

export default function ConditionalState() {
  const [condition, setCondition] = useState('보이기');

  const onChange = () => {
    condition === '보이기' ? setCondition('감추기') : setCondition('보이기');
  };

  const conditionR = condition === '감추기' && <ConditionalRender />;

  return (
    <>
      {/* &&연산자  조건이 맞으면 && 뒤에 컴포넌트가 그려진다*/}
      {conditionR}
      <button onClick={onChange}>{condition}</button>
      {conditionR}
    </>
  );
}
