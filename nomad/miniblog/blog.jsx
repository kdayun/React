import React, {useState} from 'react';
import './App.css';
import Modal from './modal';
import List from './List';


function App() {
  const [contents, setContents] = useState(
    [{name: '여자 코트 추천', date: '2월 17일',},
     {name: '여자 바지 추천', date: '2월 18일',}, 
     {name: '여자 가방 추천', date: '2월 18일',}]);
  

  //state를 직접 건드는 것 대신에 deep copy를 통해 데이터를 복사하여 수정하기
  function ChangeTitle(){
    var newtitle = [...contents];
    newtitle.sort();  
    setContents(contents);
  };


  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color : "violet", fontSize: "25px"}}>
          개발 Blog
        </div>
    </div>
      <List name={contents[0].name} date={contents[0].date}></List>
      <List name={contents[1].name} date={contents[1].date}></List>
      <List name={contents[2].name} date={contents[2].date}></List>
      <Modal></Modal> 

    </div>
  );
}

export default App;
