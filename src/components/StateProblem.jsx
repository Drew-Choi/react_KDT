/* eslint-disable prefer-template */
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

export default function StateProblem() {
  const [state, setState] = useState({ teacher: '이효석' });
  console.log(state);

  return (
    <div>
      {state.teacher}
      <br />
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => {
          state.teacher = 'tetz';
          const copyObj = { ...state };
          setState(copyObj);
        }}
      >
        1로 만들기
      </button>
    </div>
  );
}
