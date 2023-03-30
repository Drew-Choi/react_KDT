import React, { useState } from 'react';

export default function Practice3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setCount((cur) => cur + 1);
        }}
      >
        {count >= 10 ? '😎' : '👍'}
      </span>
      <br />
      <span>{count}</span>
    </div>
  );
}
