import React, { useState } from 'react';
import TimerUnmount from './TimerUnmount';

export default function TimerRender() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <TimerUnmount />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        버튼
      </button>
    </>
  );
}
