import React, { useState } from 'react'

export default function ChangeObj(props) {
  const [count, setCount] = useState(0);
  let obj = props.objArr[count]
  return (
    <div>
      <h2>이름: {obj.name}</h2>
      <h4>나이: {obj.age}</h4>
      <h4>별명: {obj.nickName}</h4>
      <hr />

      <button style={{cursor: "pointer"}} onClick={()=>{
        props.objArr?.length - 1 === count ?
        setCount(0)
        :
        setCount(count + 1)
      }}>프로필 변경하기</button>
    </div>
  )
}
