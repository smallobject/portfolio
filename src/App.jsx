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

import About from './components/About';
import Pdf from './assets/CV.pdf';
// Projects
import PoETrade from './components/projects/Project1';
import PoEUtil from './components/projects/Project2';
import ClothingStore from './components/projects/Project3';
import Portfolio from './components/projects/Project4';

//UI
import ThemeToggle from './components/ui/ThemeSelect';

import './App.css';

function App() {
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToProjects = () => projectRef.current.scrollIntoView();
  const scrollToHome = () => homeRef.current.scrollIntoView();
  const scrollToAbout = () => aboutRef.current.scrollIntoView();

  return (
    <div>
      <div className='grid grid-cols-3' ref={homeRef}>
        {/* Where navbar starts */}
        <div className='flex text-md text-gray-300 text-ms fixed z-20'>
          <span
            className='m-2 text-white hover:text-indigo-700 cursor-pointer jetbrains bg-black hover:bg-white shadow-md dark:bg-white dark:text-black dark:hover:text-indigo-700'
            onClick={() => scrollToHome()}
          >
            {'> SM.'}
          </span>
          <span
            className='m-2 hover:text-white cursor-pointer m-bg-contrast pl-2 pr-2 rounded-md dark:bg-white dark:text-black dark:hover:text-indigo-700'
            onClick={() => scrollToProjects()}
          >
            Projects
          </span>
          <span
            className='m-2 hover:text-white cursor-pointer m-bg-contrast pl-2 pr-2 rounded-md dark:bg-white dark:text-black dark:hover:text-indigo-700'
            onClick={() => scrollToAbout()}
          >
            {'About & Contact'}
          </span>
          <a
            rel='noreferrer'
            target='_blank'
            href={Pdf}
            className='m-2 hover:text-white cursor-pointer m-bg-contrast pl-2 pr-2 rounded-md dark:bg-white dark:text-black dark:hover:text-indigo-700'
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
        {/* Where navbar ends
        Where header starts */}
        <Header className='header' />
      </div>
      <div className='terminal-grid'>
        <Terminal className='pulse m-auto terminal-grid-location terminal-size z-10' />
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
        <ClothingStore />
        <Portfolio />
        <PoEUtil />
      </div>
      <div ref={aboutRef} className='terminal-grid mt-32'>
        <About />
      </div>
    </div>
  );
}

export default App;
