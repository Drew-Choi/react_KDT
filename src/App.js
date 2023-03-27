import './App.css';
//컴포넌트는 파스칼케이스로 만들어야 읽어들임
import MainHeader from './components/mainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FuntionalCompo from './components/FuntionalCompo';
import { useState } from 'react';

function App() {
  
  function azmazing () {
    return(
      "어메이징"
    )
  }

  const test = 'test'
  return (
    <div className="App">
      <h1 className='test'>Class Component 입니다!</h1>
      {azmazing()}
      <div className={test}>{ typeof test === 'string' ? "스트링" : "다른 것"} </div>
      {/* <ClassComponent />
      <FuntionalCompo />
      <MainHeader />
      <br />
      <br />
      <ImgComponent />
      <br />
      <br />
      <br />
      <BtnToNaver /> */}
    </div>
    
   
  );
}


export default App;
