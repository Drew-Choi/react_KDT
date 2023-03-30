import React from 'react';
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
