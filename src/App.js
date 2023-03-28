/* eslint-disable no-unused-vars */
import './App.css';
//컴포넌트는 파스칼케이스로 만들어야 읽어들임
import MainHeader from './components/mainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FuntionalCompo from './components/FuntionalCompo';
import Inline from './components/Inline';
import { useState } from 'react';
import EventHandler from './components/EventHandler';
import Practice from './components/Practice';
import State from './components/State';
import State2 from './components/State2';
import Practice2 from './components/Practice2';
import Condition from './components/Condition';
import Practice3 from './components/Practice3';
import ClassComp from './components/ClassComp';
import StateAndVariable from './components/StateAndVariable';
import StateProblem from './components/StateProblem';
import List from './components/List';
import PropsHeader from './components/PropsHeader';
import MultiProps from './components/MultiProps';
import ClassProps from './components/ClassProps';


function App() {
  const str = "Go Naver";
  // function azmazing () {
  //   return(
  //     "어메이징"
  //   )
  // }

  // const test = 'test'
  return (
    
    <div className="App">

      <List />

      {/* <ClassProps name= "뽀로로" age={5} nickName="사고뭉치" />

      <br />
      <br />

      <MultiProps text={str} href="https://naver.com" userID="tetz" />

      <br />

      <PropsHeader text="Hello, Props World!" />

      <br />

      <PropsHeader text="Hello" />

      <br />

      <PropsHeader text="안녕?" /> */}


     {/* <List />
     <br />
     <StateProblem />
     <br />
     <StateAndVariable />
     <br />
      
      <ClassComp />
      <br />
      <Practice3 />

      <br /> */}

      {/* <Condition />

      <br />

      <Practice2 />

      <br />

      <State2 />

      <State />

      <Practice /> */}

      {/* <h1 className='test'>Class Component 입니다!</h1>
      {azmazing()}
      <div className={test}>{ typeof test === 'string' ? "스트링" : "다른 것"} </div>

      <EventHandler />

      <Inline /> */}
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
