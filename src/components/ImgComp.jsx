import React from 'react';
import dog from '../images/강쥐.jpeg';

export default function ImgComp() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="./images/강쥐.jpeg" alt="강아지 사진" />
      <h1>SRC 폴더</h1>
      <img src={dog} alt="강아지 사진" />
    </>
  );
}
