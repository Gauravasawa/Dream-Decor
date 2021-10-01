import React,{useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from "./components/navbar";
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import {
  InfoData,
  InfoDataTwo,
  InfoDataThree,
  InfoDataFour,
} from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen]= useState(false);

  const toggle =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <InfoSection {...InfoDataThree} />
      <InfoSection {...InfoDataFour} />
    </>
  );
}

export default App;
