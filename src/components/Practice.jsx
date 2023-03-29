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

import React from 'react';

export default function Practice() {
  const str = 'Hello, first exercise';
  return (
    <div
      style={{ marginTop: '32px', backgroundColor: 'skyblue' }}
      onClick={() => {
        alert('클릭 됨');
      }}
    >
      {str}
    </div>
  );
}
