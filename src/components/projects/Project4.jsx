import React, { useState } from 'react';
import { ReactComponent as Blob3 } from '../../assets/blob1.svg';
import { ReactComponent as Lines } from '../../assets/lines.svg';

function Project4() {
  const [sectionVisibility, setSectionVisibility] = useState('div-hidden');

  return (
    <div className='items-center location-2 -mt-8 relative'>
      <Blob3 id='blob3proj4' />
      <Lines id='linesproj4' />
      <div
        className='flex flex-col justify-center items-center max-w-lg mx-auto my-8 relative h-96'
        onMouseEnter={() => setSectionVisibility('div-shown4')}
        onMouseLeave={() => setSectionVisibility('div-hidden')}
      >
        <div className='w-full h-full rotating-bg absolute rounded-md rotate-left' />
        <div className='w-full h-full rotating-bg2 absolute rounded-md rotate-right' />
        <div className='m-bg-contrast h-full w-full rounded-lg shadow-lg bg-cover bg-center bg-gradient4' />
        <div
          className={`absolute bg-cover shadow-lg w-full h-full rounded-md text-white description ${sectionVisibility}`}
        >
          <div className='w-full h-full rotating-bg3 absolute transform -rotate-6 rounded-md rotate-left' />
          <div className='w-full h-full rotating-bg3 absolute transform rotate-6 rounded-md rotate-right' />
          <div className='m-4'>
            <p className='text-3xl m-blue text-center mb-2'>Portfolio Site</p>
            This website itself was built as a mini-project, it uses some really
            cool technology like{' '}
            <span className='orange-color font-bold'>Netlify</span> for hosting
            and continuous deployments and animated SVGs. I went with{' '}
            <span className='orange-color font-bold'>React</span> instead of
            vanilla javascript to take advantage of the{' '}
            <span className='orange-color font-bold'>Python</span> package I
            used to create the terminal(Tutorial in Github).{' '}
            <span className='orange-color font-bold'>TailwindCSS</span> is used
            for the styling although a lot of the site uses custom CSS for most
            things. I created the initial design in{' '}
            <span className='orange-color font-bold'>Figma</span> and then moved
            on to creating the actual website.
          </div>
          <a
            href='https://github.com/smallobject/clothing-store'
            className='m-auto flex button-width bg-gray-800 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'
          >
            Github Link
          </a>
          <a
            href='https://www.npmjs.com/package/poe-util'
            className='m-auto flex button-width bg-gray-800 mt-4 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'
          >
            Live Link
          </a>
        </div>
        <div className='w-56 md:w-64 m-bg-contrast -mt-10 shadow-lg rounded-lg overflow-hidden'>
          <div className='py-2 text-center font-bold uppercase tracking-wide text-white'>
            Portfolio Site
          </div>
          <div className='flex items-center justify-between py-2 px-3 m-bg-contrast'>
            <small className='m-cyan'>React</small>
            <small className='m-cyan'>Python</small>
            <small className='m-cyan'>TailwindCSS</small>
            <small className='m-cyan'>Netlify</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project4;
