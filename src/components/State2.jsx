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

export default function State2() {
  const [strState, setStrState] = useState('init');

  return (
    <div>
      <button
        onClick={() => {
          setStrState(strState + '+');
        }}
      >
        반복
      </button>

      <button>반복2</button>
      <br />
      <span>{strState}</span>
    </div>
  );
}
