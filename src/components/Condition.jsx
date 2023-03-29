/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
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
