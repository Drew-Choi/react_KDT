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
