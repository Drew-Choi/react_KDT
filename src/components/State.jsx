import React, { useState } from 'react';

export default function State() {
  const [teacher, setTeacher] = useState('C아저씨');

  return (
    <div>
      <button
        onClick={() => {
          setTeacher('Mr.C');
        }}
      >
        영어로!
      </button>
      <br />
      <span id="text">{teacher}</span>
    </div>
  );
}
