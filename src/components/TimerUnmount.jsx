import React, { useEffect } from 'react';

export default function TimerUnmount() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실핼 중');
    }, 1000);
    return () => {
      console.log('컴포넌트 언마운트, 타이머가 종료됩니다.');
      clearInterval(timer);
    };
  }, []);

  return <div>Timer실행 중...</div>;
}
