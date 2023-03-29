/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-else-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

export default function Practice3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setCount((cur) => cur + 1);
        }}
      >
        {count >= 10 ? '😎' : '👍'}
      </span>
      <br />
      <span>{count}</span>
    </div>
  );
}
