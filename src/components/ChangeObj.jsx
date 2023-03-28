import React, { useState } from 'react'

export default function ChangeObj(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>이름: {props.objArr[count].name}</h2>
      <h4>나이: {props.objArr[count].age}</h4>
      <h4>별명: {props.objArr[count].nickName}</h4>
      <hr />

      <button onClick={()=>{
        props.objArr.length - 1 > count ?
        setCount(count + 1)
        :
        setCount(0)
      }}>프로필 변경하기</button>
    </div>
  )
}
