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

export default function State() {
  const [teacher, setTeacher] = useState('이효석');

  return (
    <div>
      <button
        onClick={() => {
          setTeacher('tetz Lee');
        }}
      >
        영어로!
      </button>
      <br />
      <span id="text">{teacher}</span>
    </div>
  );
}
