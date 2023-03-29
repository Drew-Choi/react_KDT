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

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  let variable = 0;

  function plusVariable() {
    variable += 1;
    console.log(`state: ${state}, variable: ${variable}`);
  }

  return (
    <div>
      <h1>
        {state} / {variable}
      </h1>
      <button
        onClick={() => {
          setState((cur) => cur + 1);
          plusVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}
