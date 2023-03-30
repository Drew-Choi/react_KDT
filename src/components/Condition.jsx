import React, { useState } from 'react';

export default function Condition() {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <h1>{condition ? '따봉' : 'ㅠㅠ'}</h1>
      <button
        onClick={() => {
          setCondition(!condition);
        }}
      >
        {' '}
        컨디션 변경{' '}
      </button>
    </div>
  );
}
