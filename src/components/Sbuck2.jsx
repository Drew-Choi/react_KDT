import { useRef, useState } from 'react';

export default function Sbuck2() {
  const [again, setAgain] = useState(true);

  const firstRandomNumber = Math.floor(Math.random() * 10);
  const secondRnadomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  const randomArithmetic = Math.floor(Math.random() * arithmeticArr.length);
  const answerInput = useRef();
  const operator = arithmeticArr[randomArithmetic];

  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  const checkAnswer = () => {
    let answer = 0;
    if (randomArithmetic === 0) {
      answer = firstRandomNumber + secondRnadomNumber;
    } else if (randomArithmetic === 1) {
      answer = firstRandomNumber - secondRnadomNumber;
    } else if (randomArithmetic === 2) {
      answer = firstRandomNumber * secondRnadomNumber;
    }

    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다.');
      setAgain(!again);
      clearInput();
    } else {
      alert('틀렸습니다.');
      clearInput();
    }
  };

  return (
    <div>
      <h1>
        {firstRandomNumber} {operator} {secondRnadomNumber}
      </h1>
      <input ref={answerInput} type="text" />
      <button onClick={checkAnswer}>정답제출</button>
    </div>
  );
}
