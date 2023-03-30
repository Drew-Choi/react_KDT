import React from 'react';

export default function Practice4({ item, price }) {
  return (
    <div>
      <h2>품목명: {item}</h2>
      <p>가격: {price}원</p>
      <br />
    </div>
  );
}
