/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

export default class ClassProps extends Component {
  render() {
    const { name, age, nickName } = this.props;
    return (
      <div>
        <h1>이름: {name}</h1>
        <h2>나이: {age}</h2>
        <h2>별명: {nickName}</h2>
      </div>
    );
  }
}
