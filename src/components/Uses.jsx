import React, { useEffect, useRef } from 'react';
import HomeOffice from '../assets/images/homeoffice.jpg';

import './uses.css';

const Uses = ({ showUses, setModalView }) => {
  //creating a reference for our container so we do not close it
  //if someone clicks inside of it
  let containerRef = useRef();
  //Adding effect to close the modal from click anywhere outside of it
  //Removing the eventlistener after the ffect has happened
  useEffect(() => {
    if (showUses) {
      let clickOutsideEvent = (e) => {
        if (!containerRef.current.contains(e.target)) {
          setModalView();
        }
      };
      document.addEventListener('mousedown', clickOutsideEvent);

      return () => {
        document.removeEventListener('mousedown', clickOutsideEvent);
      };
    }
  });

  if (showUses) {
    return (
      <div className='overlay-bg'>
        <div className='overlay-container'>
          <div className='uses-container' ref={containerRef}>
            <span
              className='cursor-pointer font-bold float-right m-2 text-xs text-red-500'
              onClick={() => setModalView()}
            >
              CLOSE ME
            </span>
            <h1 className='text-gray-200 font-bold text-3xl text-center mt-4 jetbrains m-blue'>
              WHAT I USE
            </h1>
            {/* <button className='uses-button' onClick={() => setModalView()}>
              Close Modal
            </button> */}
            <div>
              <h1 className='text-gray-200 jetbrains bg-black w-max p-1 m-2'>
                {'//Home Office Setup'}
              </h1>
              <img
                src={HomeOffice}
                alt=''
                className='office-img m-auto rounded-md shadow-sm mt-2 mb-2'
              />
              <div>
                <ul className='text-gray-200 text-sm m-2'>
                  <li>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://www.amazon.com/LG-32GK650F-B-Monitor-FreeSync-Technology/dp/B07FLGR2PN/ref=sr_1_4?dchild=1&keywords=LG+UltraGear+32GK650F-B&qid=1617483269&sr=8-4'
                    >
                      {' '}
                      32" LG UltraGear 32GK650F-B Monitor (Main)
                    </a>
                  </li>
                  <li> 27" AOC CQ27G2U/BK (Vertical)</li>
                  <li> Something else</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Uses;
