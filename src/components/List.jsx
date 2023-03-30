import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List() {
  const dataArr = [
    {
      title: '리액트 공부하기',
      todo: 'State 사용법 익히기',
    },
    {
      title: '코테 문제 풀기',
      todo: 'Lv 0 정복 가즈아',
    },
    {
      title: '한강 가기',
      todo: '경품 타기',
    },
    {
      title: 'Map 개좋음',
      todo: '짱',
    },
  ];

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <Modal />
      {dataArr.map((el, index) => (
        <ListChild key={index} h2={el.title} p={el.todo} />
      ))}
      <hr />
      <Modal />
    </div>
  );
}
