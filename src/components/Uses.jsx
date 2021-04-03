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
              className='cursor-pointer font-bold float-right m-2 text-xs text-red-500 stroke-1 border pl-2 pr-2 pt-1 pb-1  border-red-500 rounded-md'
              onClick={() => setModalView()}
            >
              X
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
                <h3 className='font-bold text-white jetbrains ml-3'>Desk</h3>
                <ul className='text-gray-200 text-sm ml-3 list-disc list-inside'>
                  <li className='font-bold mb-3'>
                    Custom Built Oak Wood Standing Desk with Twin Motors
                  </li>
                </ul>
                <h3 className='font-bold text-white jetbrains ml-3'>
                  Monitors
                </h3>
                <ul className='text-gray-200 text-sm ml-3 list-disc list-inside'>
                  <li>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://www.amazon.com/LG-32GK650F-B-Monitor-FreeSync-Technology/dp/B07FLGR2PN/ref=sr_1_4?dchild=1&keywords=LG+UltraGear+32GK650F-B&qid=1617483269&sr=8-4'
                    >
                      32" LG UltraGear 32GK650F-B Monitor (Main)
                    </a>
                  </li>
                  <li>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://hard.rozetka.com.ua/ua/aoc_q27g2u_bk/p181576431/'
                    >
                      27" AOC CQ27G2U/BK (Vertical)
                    </a>
                  </li>
                  <li>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://rozetka.com.ua/ua/xiaomi_mld1silver/p186188836/'
                    >
                      Xiaomi Locktek Pneumatic Monitor Arm (Main)
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://rozetka.com.ua/ua/brateck_ldt07_c012/p16080542/'
                    >
                      Brateck Black Monitor Arm (Vertical)
                    </a>
                  </li>
                </ul>
                <h3 className='font-bold text-white jetbrains ml-3'>Audio</h3>
                <ul className='text-gray-200 text-sm ml-3 list-disc list-inside'>
                  <li>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://rozetka.com.ua/ua/fifine_t669/p228763699/'
                    >
                      Fifine T669 Microphone
                    </a>
                  </li>
                  <li>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://rozetka.com.ua/ua/m_audio_mu_0081/p163812062/'
                    >
                      M-Audio Air 192x6 Audio Interface
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://rozetka.com.ua/ua/beyerdynamic_235251/p180209016/'
                    >
                      Beyerdynamic DT 770 Pro 250 Ohms
                    </a>
                  </li>
                </ul>
                <h3 className='font-bold text-white jetbrains ml-3'>
                  Peripherals
                </h3>
                <ul className='text-gray-200 text-sm ml-3 list-disc list-inside'>
                  <li className=''>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://hard.rozetka.com.ua/ua/logitech_910_005710/p193256449/'
                    >
                      Logitech MX Master 3 Mouse
                    </a>
                  </li>
                  <li>ZealPC Zealios Deskpad (Discontinued)</li>
                  <li className=''>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='m-blue'
                      href='https://shop.modedesigns.com/collections/keyboards/products/eighty?variant=33104821092434'
                    >
                      ModeDesign Mode80 Deco WKL Hotswap
                    </a>
                  </li>
                  <li className='ml-6'>GMK Modern Dolch 2 Keycap Set</li>
                  <li className='ml-6'>
                    Aviator Style Coiled Cable Deco by SwiftCables
                  </li>
                  <li className='ml-6'>
                    Durock T1 Switches Lubed with Krytox 250g0
                  </li>
                  <li className='ml-6 mb-6'>FR4 Aluminum Plate</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className='text-gray-200 jetbrains bg-black w-max p-1 m-4'>
                {'//Softwares'}
              </h1>
              <h3 className='font-bold text-white jetbrains ml-3'>Coding</h3>
              <ul className='text-gray-200 text-sm ml-3 list-disc list-inside'>
                <li className=''>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://code.visualstudio.com/'
                  >
                    Visual Studio Code
                  </a>
                </li>
                <li className='ml-6'>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://draculatheme.com/pro'
                  >
                    Dracula Pro Theme
                  </a>
                </li>
                <li className='ml-6'>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://www.jetbrains.com/lp/mono/'
                  >
                    JetBrains Mono Font
                  </a>
                </li>
                <li className=''>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://github.com/microsoft/terminal'
                  >
                    Windows Terminal Preview
                  </a>
                </li>
                <li className=''>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://code.visualstudio.com/'
                  >
                    Figma
                  </a>
                </li>
                <li className=''>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://www.adobe.com/products/photoshop.html'
                  >
                    Adobe Photoshop
                  </a>
                </li>
                <li className=''>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://www.adobe.com/products/illustrator.html'
                  >
                    Adobe Illustrator
                  </a>
                </li>
                <li className=''>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='m-blue'
                    href='https://www.notion.so/'
                  >
                    Notion
                  </a>
                </li>
              </ul>
            </div>
            <p className='text-white text-center text-sm m-6'>
              More to be added soon :)
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Uses;
