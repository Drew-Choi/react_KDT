import './App.css';
//컴포넌트는 파스칼케이스로 만들어야 읽어들임
import MainHeader from './components/mainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FuntionalCompo from './components/FuntionalCompo';
import { useState } from 'react';

function App() {

  let [att, setAtt] = useState(["에어조던", "나이키", "아디다스", "폴로"])
  let [turn, setTurn] = useState("on")

    
  return (
    <div className="App">
      {/* <ClassComponent />
      <FuntionalCompo />
      <MainHeader /> */}
      <br />
      <br />
      <ImgComponent />
      <br />
      <br />
      <br />
      <BtnToNaver />

      <button onClick={()=>{
        if(turn === "on") {
          setTurn("off")
        }
      }}></button>

    </div>
    
   
  );
}


export default App;
