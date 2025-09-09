import { useState } from 'react';
import './App.css';
import  Box from './Components/Box/Box.jsx';
import {data_left, data_right} from '../data.js';
import pt1 from './assets/Anh dai dien.jpg';
import TabButton from './Components/TabButton/TabButton.jsx';
import ListImage from './Components/ListImage/ListImage.jsx';
function App() {
  const [selectTopic, setSelectTopic] =useState('Python');
  function handle(topic){
    setSelectTopic(topic);
  }
    return (
      <>
        <div className="layout">
            <div className='div1'>
                <div className="layoutPic">
                  <img className="AnhDaiDien" src={pt1} alt="Ảnh đại diện" />
                </div>
                {
                  data_left.map((item, index)=>
                    <Box key={index} {...item} />
                  )
                }
            </div>
            <div className='div2'>
                <div className='big_header'>
                  <p style={{fontSize: "45px", fontWeight:"bold"}}>TRẦN QUỐC TUẤN DUY</p>
                  <p style={{margin: "-20px 2px 0"}}>KỸ SƯ PHẦN MỀM</p>
                </div>
                <div className='layoutButton'>
                  <TabButton clicked={handle} isActive={selectTopic==='Python'}>Python</TabButton>
                  <TabButton clicked={handle} isActive={selectTopic==='Debug'}>Debug</TabButton>
                  <TabButton clicked={handle} isActive={selectTopic==='GitHub'}>GitHub</TabButton>
                  <TabButton clicked={handle} isActive={selectTopic==='Cloud'}>Cloud</TabButton>
                </div>
                  {!selectTopic ? (<></>):(<ListImage topic={selectTopic}/>)}
                {
                  data_right.map((item, index)=>
                    <Box key={index} {...item}/>
                  )
                }
            </div>
        </div>
      </>
    )
}

export default App;
