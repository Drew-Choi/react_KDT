import React, { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerRender() {
  const [condition, setCondition] = useState(false);

  return (
    <>
      {condition && <PracticeTimer />}
      <button onClick={() => setCondition((cur) => !cur)}>
        {condition ? '숨기기' : '보이기'}
      </button>
    </>
  );
}
