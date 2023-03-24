import './App.css';
//컴포넌트는 파스칼케이스로 만들어야 읽어들임
import MainHeader from './components/mainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FuntionalCompo from './components/FuntionalCompo';


function App() {
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
    </div>
  );
}

export default App;
