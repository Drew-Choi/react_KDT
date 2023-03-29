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
import ChangeObj from './ChangeObj';

export default function ExampleChangeObj() {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
    {
      name: '두루미',
      age: '32',
      nickName: '몰라',
    },
    {
      name: 'Tetz',
      age: '39',
      nickName: '강사님',
    },
  ];

  return (
    <div>
      <ChangeObj objArr={pororoObjArr} />
    </div>
  );
}
