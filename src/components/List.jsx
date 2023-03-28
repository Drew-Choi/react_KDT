import React from 'react'
import ListChild from './ListChild'
import Modal from './Modal'

export default function List() {
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <Modal />
      <hr />
      <ListChild h2="리액트 공부하기" p="state 사용법 익히기" />
      <hr />
      <ListChild h2="코테 문제 풀기" p="Lv 0 정복 가즈아" />
      <hr />
      <Modal />
    </div>
  )
}
