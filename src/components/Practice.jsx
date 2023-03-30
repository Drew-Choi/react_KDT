import React from 'react';

export default function Practice() {
  const str = 'Hello, first exercise';
  return (
    <div
      style={{ marginTop: '32px', backgroundColor: 'skyblue' }}
      onClick={() => {
        alert('클릭 됨');
      }}
    >
      {str}
    </div>
  );
}
