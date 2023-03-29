/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-else-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */

import { Component } from 'react';

class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }

  render() {
    return <h1>Hello, {this.cas ? '캬햐' : '노맛'} Component world!</h1>;
  }
}

// function MainHeader () {
//   const cas = false;

//   return (
//     //컴포넌트는 파스칼케이스로 만들어야 읽어들임
//     <h1>Hello, {cas ? "캬햐" : "노맛"} Component world!</h1>
//   );
// };

export default MainHeader;
