import React, { useState } from 'react';
import ProfilePicture from '../assets/images/head1.png';
import { ReactComponent as Email } from '../assets/icons/email.svg';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Telegram } from '../assets/icons/telegram.svg';
import { ReactComponent as World } from '../assets/icons/world.svg';

function About() {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    telegram: '',
    location: '',
  });

  const revealInfo = () => {
    setContactInfo({
      email: 'smallobject.dev@gmail.com',
      phone: '+380639889961',
      telegram: '+380639889961',
      location: 'Kyiv, Ukraine',
    });
  };

  return (
    <div className='w-full h-96 terminal-grid-location relative'>
      <h1 className='text-6xl text-center text-white mb-16 relative add-dots w-max m-auto pb-12 dark:text-black'>
        About Me
      </h1>
      <img
        src={ProfilePicture}
        alt='head1'
        className='h-32 w-32 object-cover rounded-full z-10 m-auto -mb-10 profile-stroke relative'
      />
      <div className='w-full text-gray-400 m-bg-contrast pt-14 pl-8 pr-8 pb-8 rounded-lg'>
        <h1 className='font-bold text-white mt-2 text-xl jetbrains'>
          {'//Intro'}
        </h1>
        <p>
          Hey, my name is Tiesti. I'm moving from my previous position of
          <span className='orange-color shadow'> Project Manager</span> in
          pursuit of my real passion, being a{' '}
          <span className='orange-color shadow'>Full Stack Developer</span>. In
          my years as a Project Manager I've helped ship and maintain multiple
          SaaS products in different industries like Fintech, Crypto and
          Marketing. I've learned many things in my line of work and a few
          things I believe in are:{' '}
          <span className='orange-color'>
            Consistency, Efficiency, Reusability, Automation and Performance.
          </span>
        </p>
        <h1 className='font-bold text-white mt-6 text-xl jetbrains'>
          {'//Coding'}
        </h1>
        <p>
          I started coding at the age of 15 with PAWN, a language for scripting
          in video games, and since then I haven't really stopped coding on my
          side projects for fun. I've been using Javascript on and off for many
          years and have taken multiple courses while also being an autodidact
          with different technologies. I always enjoy using the latest and
          greatest, and I never get tired of learning.{' '}
          <span className='font-bold'>
            Because of my ability to self-learn and autodidact I can learn new
            technologies, trends and best practices very quickly.
          </span>
        </p>

        <h1 className='font-bold text-white mt-6 text-xl jetbrains'>
          {'//Tech_Stack'}
        </h1>
        <h1 className='font-bold text-white jetbrains bg-black w-max pl-1 pr-1'>
          {' '}
          $ cat <span className='orange-color'>FRONT_end.txt</span>
          <span className='cursor-blink font-bold jetbrains'>|</span>
        </h1>
        <p>
          React, React-Hooks, Typescript, Redux, Redux-Sagas, Redux-Toolkit,
        </p>
        <p>NextJS, Gatsby, TailwindCSS, TailwindCSS SASS, styled-components,</p>
        <p>SVGs, ThreeJS, Animations.</p>

        <h1 className='font-bold text-white jetbrains bg-black w-max pl-1 pr-1 mt-4'>
          {' '}
          $ cat <span className='orange-color'>BACK_end.txt</span>
          <span className='cursor-blink font-bold font-mono'>|</span>
        </h1>
        <p>NodeJS, Python, Django, Express, Koa, MongoDB, mongoose,</p>
        <p>GraphQL, Hasura, Apollo, PostgreSQL, Firebase, JWT</p>
        <p>API Development, User Auth, etc.</p>
        <h1 className='font-bold text-white mt-6 text-xl jetbrains'>
          {'//Interests'}
        </h1>
        <p>
          I love <span className='font-bold'>User Design</span>,{' '}
          <span className='font-bold'>User Interfaces </span>
          and <span className='font-bold'>User Experience</span>, turning a
          weakness of most developers into a passion has been nothing but
          amazing. It has allowed me to create, deliver and properly communicate
          a products user experience much more fluently.
        </p>
        <p>
          I'm very interested building full stack websites to scale to millions
          of users a month. I also love participating in multiple different
          projects.
        </p>
        <p>
          In my free time if I'm not learning a new technology or polishing an
          existing one you'll find me building keyboards, going to the gym and
          making music.
        </p>
        <h1
          className='mt-8 text-white font-bold text-xl cursor-pointer jetbrains'
          onClick={() => revealInfo()}
        >
          {'//Contact_Me'}
        </h1>
        <p className=' mt-2' onClick={() => revealInfo()}>
          <Email className='h-4 w-4 float-left mt-1 mr-1' fill='#fff' />
          Email: <span className='orange-color'>{contactInfo.email}</span>
        </p>
        <p onClick={() => revealInfo()}>
          <Phone className='h-4 w-4 float-left mt-1 mr-1' fill='#fff' />
          Phone: <span className='orange-color'>{contactInfo.phone}</span>
        </p>
        <p onClick={() => revealInfo()}>
          <Telegram className='h-4 w-4 float-left mt-1 mr-1' fill='#fff' />
          Telegram: <span className='orange-color'>{contactInfo.telegram}</span>
        </p>
        <p onClick={() => revealInfo()}>
          <World className='h-4 w-4 float-left mt-1 mr-1' fill='#fff' />
          Location: <span className='orange-color'>{contactInfo.location}</span>
        </p>
        <p className='mt-2 cursor-pointer' onClick={() => revealInfo()}>
          Please click to show the details, hidden due to bots :)
        </p>
      </div>

      <div className='text-center text-white font-bold p-8 dark:text-black'>
        Made with lots of ❤️ and ☕. :)
      </div>
    </div>
  );
}

export default About;
