import React from 'react';

import './uses.css';

const Uses = ({ showUses, setModalView }) => {
  if (showUses) {
    return (
      <div className='overlay-container'>
        <div className='uses-container'>
          <span
            className='cursor-pointer font-bold float-right m-2 text-xs text-red-500'
            onClick={() => setModalView()}
          >
            CLOSE ME
          </span>
          <h1 className='text-gray-200 jetbrains text-3xl text-center mt-4'>
            What I use
          </h1>
          <button className='uses-button' onClick={() => setModalView()}>
            Close Modal
          </button>
          <dir>
            <h1>Computer Setup</h1>
          </dir>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Uses;
