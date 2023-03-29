/* eslint-disable no-else-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function CustomObj(props) {
  if (props.obj) {
    const { name, age, nickName } = props.obj;
    return (
      <div>
        <h1>이름: {name}</h1>
        <h2>나이: {age}</h2>
        <h2>별명: {nickName}</h2>
      </div>
    );
  } else {
    return <div>데이터가 없습니다.</div>;
  }
}
