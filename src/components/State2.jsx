import React, { useState } from 'react';

export default function State2() {
  const [strState, setStrState] = useState('init');

  return (
    <div>
      <button
        onClick={() => {
          setStrState(strState + '+');
        }}
      >
        반복
      </button>

      <button>반복2</button>
      <br />
      <span>{strState}</span>
    </div>
  );
}
