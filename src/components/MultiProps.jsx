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

//props를 받을 때 바로 구조분해할당으로 받는 것이 좋음
export default function MultiProps({ text, href, userID }) {
  return (
    <div>
      <h1>{userID}님 반갑습니다.</h1>
      <a href={href}>{text}</a>
    </div>
  );
}
