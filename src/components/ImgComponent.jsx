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

// import image from './강쥐.jpeg';
//이미지파일을 로컬에서 불러올때 src내에 있어야 불러올 수 있다.
//src 외부는 임폴트 할 수 없다.
import { Component } from 'react';

class ImgComponent extends Component {
  render() {
    return <img src="/강쥐.jpeg" alt="이미지" />;
  }
}

// function ImgComponent () {
//   return(
//     //로컬 src로 접근하고 싶으면 pulic 폴더에 원본 이미지를 넣어주면 된다.
//     //리액트 자체내에서 public을 정의해 놓아서  '/'이것만 써도 public으로 이동된다.
//    <img src="/강쥐.jpeg" alt="이미지" />
//   )
// }

export default ImgComponent;
