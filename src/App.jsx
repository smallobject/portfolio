import React, { useRef } from 'react';
import Header from './components/Header';
import { ReactComponent as Blob1 } from './assets/blob1.svg';
import { ReactComponent as Blob2 } from './assets/blob2.svg';
import { ReactComponent as Blob3 } from './assets/blob3.svg';
import { ReactComponent as Blob4 } from './assets/blob4.svg';
import { ReactComponent as Blob5 } from './assets/blob5.svg';
import { ReactComponent as Blob6 } from './assets/blob6.svg';
import { ReactComponent as NodeJS } from './assets/logos/nodejs.svg';
import { ReactComponent as ReactJS } from './assets/logos/reactjs.svg';
import { ReactComponent as Redux } from './assets/logos/redux.svg';
import { ReactComponent as Tailwind } from './assets/logos/tailwind.svg';
import { ReactComponent as Python } from './assets/logos/python.svg';
import { ReactComponent as GraphQL } from './assets/logos/graphql.svg';
import { ReactComponent as Dots } from './assets/dots.svg';
import Terminal from './components/Terminal';
// import NavBar from './components/NavBar';

import PoETrade from './components/projects/Project1';
import PoEUtil from './components/projects/Project2';
import ClothingStore from './components/projects/Project3';
import Portfolio from './components/projects/Project4';
import './App.css';

function App() {
  const projectRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToProjects = () => projectRef.current.scrollIntoView();
  const scrollToHome = () => homeRef.current.scrollIntoView();

  return (
    <div>
      <div className='grid grid-cols-3' ref={homeRef}>
        {/* Where navbar starts */}
        <div className='flex text-md text-gray-300 text-ms fixed z-10'>
          <span
            className='m-2 text-white hover:text-indigo-400 cursor-pointer float-right jetbrains'
            onClick={() => scrollToHome()}
          >
            > SM.
          </span>
          <span
            className='m-2 hover:text-white cursor-pointer'
            onClick={() => scrollToProjects()}
          >
            Projects
          </span>
          <span className='m-2 hover:text-white cursor-pointer float-right'>
            About
          </span>
          <span className='m-2 hover:text-white cursor-pointer'>Resume</span>
          <span className='m-2 hover:text-white cursor-pointer'>Contact</span>
        </div>
        {/* Where navbar ends
        Where header starts */}
        <Header className='header' />
      </div>
      <div className='terminal-grid'>
        <Terminal className='pulse m-auto terminal-grid-location terminal-size' />
      </div>
      <Blob1 id='blob1' className='animated' />
      <Blob2 id='blob2' />
      <Blob4 id='blob4' />
      <Blob3 id='blob3' className='animated' />
      <Blob5 id='blob5' />
      <Blob6 id='blob6' />
      <NodeJS id='nodejs' className='logo-pulse' />
      <ReactJS id='reactjs' className='logo-pulse' />
      <Redux id='redux' className='logo-pulse' />
      <Tailwind id='tailwind' />
      <Python id='python' className='logo-pulse' />
      <GraphQL id='graphql' className='logo-pulse' />
      <Dots id='dots' className='animated2' />
      <div ref={projectRef} className='grid grid-cols-3 grid-rows-3 mt-4'>
        <PoETrade />
        <Portfolio />
        <PoEUtil />
        <ClothingStore />
      </div>
    </div>
  );
}

export default App;
