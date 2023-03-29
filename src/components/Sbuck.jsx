import { useRef } from 'react';

export default function Sbuck() {
  const cal = ['x', '-', '+'];
  //일반 숫자 랜덤
  const random = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];
  //0~2까지 제한을 둔 랜덤
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //연산자 구분하기 0~2까지 랜덤 적용
  const radom2 = rand(0, 2);
  //useRef 돔컨트롤로 사용자 답변 받기
  const answer = useRef();

  //난수 연산한 결과값 담기
  let res = 0;

  //난수 연산과 useRef값 비교 연산하여 alert띄우기
  const calculation = (a, b, c) => {
    if (b === 'x') {
      res = a * c;
    } else if (b === '-') {
      res = a - c;
    } else if (b === '+') {
      res = a + c;
    }
    if (Number(answer.current.value) === res) {
      alert('정답입니다.');
      window.location.reload();
    } else {
      alert('다시 풀기');
      answer.current.value = '';
      answer.current.focus();
    }
  };

  return (
    <div>
      <h2>
        {random[0]} {cal[radom2]} {random[1]}
        <br />
        <input ref={answer} type="text" />
        <button onClick={() => calculation(random[0], cal[radom2], random[1])}>
          답 제출
        </button>
      </h2>
    </div>
  );
}
