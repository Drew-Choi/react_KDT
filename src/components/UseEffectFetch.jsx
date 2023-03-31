import React, { useEffect, useState } from 'react';
import ProfileComp from './ProfileComp';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return '망했어요';

    //json()은 json형태를 자바스크립트 형태로 바꾸는 것. JSON.parser와 비슷하나 좀 더 편함
    const data = await resFetch.json();
    console.log(data);
    setDataArr((cur) => data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>UseEffectFetch</div>
      {dataArr.map((el, index) => {
        return (
          <ProfileComp
            key={index}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </>
  );
}
