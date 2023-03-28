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
import Practice4 from './components/Practice4';
import items from './ItemsData';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import ChangeObj from './components/ChangeObj';


function App() {

  const pororoObjArr = [
    {
    name: "뽀로로",
    age: "5",
    nickName: "사고뭉치",
    },
    {
    name: "루피",
    age: "4", nickName: "공주님",
    },
    {
    name: "크롱이",
    age: "5",
    nickName: "장난꾸러기",
    }, 
  ];
  // const nameArr = ["뽀로로", "루피", "크롱이"];
  // const str = "Go Naver";
  // const pororoObj = {
  //   name: "뽀로로",
  //   age: "5",
  //   nickName: "사고뭉치",
  // }
  // function azmazing () {
  //   return(
  //     "어메이징"
  //   )
  // }

  // const test = 'test'
  return (
    <div className="App">

      <ChangeObj objArr= {pororoObjArr} />

    {/* <CustomList />
    <CustomObj obj={pororoObj} />

    <br />

    <h1>하드 코딩</h1>
    <Practice4 item="PS5" price="685,000" />
    <Practice4 item="에어프라이어" price="50,000" />
    <Practice4 item="사세 치킨윙" price="11,500" />


    <hr />

    <h1>props만</h1>
      <Practice4 item={items[0].item} price={items[0].price} />
      <Practice4 item={items[1].item} price={items[1].price} />
      <Practice4 item={items[2].item} price={items[2].price} />

     <hr />
     <h1>Map props</h1>

      {
        items.map((el, index) => 
          <Practice4 key={index} item={el.item} price={el.price} />
        )
      }

      <br />
      <br />
      <List /> */}

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
