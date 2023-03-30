import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(false);
  const time = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
      console.log('타이머스타트');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []);

  return (
    <>
      {/* useRef는 값이 렌더링에 영향을 받지는 않지만, 그려지는 것으 리렌더링이 되어야 최신값을 그려준다. */}
      {/* 그래서 useState는 리렌더링을 위한 용으로 쓰이지 useState에 뭘 넣지는 않아도 된다.
      useState를 자극시켜서 리렌더링을 유도하고, useRef는 콘솔에서만 추가되던 값을 실제로 그려준다. */}
      <h1> {time.current} </h1>
      <button
        onClick={() => {
          setRender((cur) => !cur);
        }}
      >
        시간
      </button>
    </>
  );
}
