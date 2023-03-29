/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function CustomList({ arr }) {
  return (
    <ul>
      {arr?.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
}
