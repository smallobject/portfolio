import React, { useState } from 'react';
import ProfilePicture from '../assets/images/head1.png';

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
      phone: 'test',
      telegram: 'test',
      location: 'test, test, world',
    });
  };

  return (
    <div className='w-full h-96 terminal-grid-location'>
      <h1 className='text-6xl text-center text-white mb-16'>About Me</h1>
      <img
        src={ProfilePicture}
        alt='head1'
        className='h-32 w-32 object-cover rounded-full z-10 m-auto -mb-10 profile-stroke relative'
      />
      <div className='w-full text-white m-bg-contrast pt-14 pl-8 pr-8 pb-8 rounded-lg'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, rerum
          fuga illum, eius necessitatibus pariatur temporibus minus sint
          laboriosam itaque ipsam perspiciatis repudiandae quae hic. Blanditiis
          temporibus amet culpa voluptatem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis, vitae minus porro quos
          molestias deleniti explicabo officia ipsam. Minus, aperiam cupiditate
          ea impedit sequi reiciendis voluptate excepturi repudiandae! Unde,
          beatae!
        </p>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore
          ipsam facilis esse nemo tempore placeat doloremque repellat! Aperiam
          natus vitae qui ut nulla fugiat beatae expedita mollitia, tempore et!
        </p>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore
          ipsam facilis esse nemo tempore placeat doloremque repellat! Aperiam
          natus vitae qui ut nulla fugiat beatae expedita mollitia, tempore et!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          molestias explicabo autem sed? Et corrupti dolorum doloribus, saepe
          esse corporis recusandae atque aut laudantium possimus quo. Aliquam,
          libero expedita? Dolore?
        </p>
        <p className='mt-8 font-bold text-lg' onClick={() => revealInfo()}>
          Contact Me
        </p>
        <p id='email' className='mt-2' onClick={() => revealInfo()}>
          📧Email: {contactInfo.email}
        </p>
        <p onClick={() => revealInfo()}>📞Phone: {contactInfo.phone}</p>
        <p onClick={() => revealInfo()}>📞Telegram: {contactInfo.telegram}</p>
        <p onClick={() => revealInfo()}>🌎Location: {contactInfo.location}</p>
        <p className='mt-2' onClick={() => revealInfo()}>
          Please click to show the details, hidden due to bots :)
        </p>
      </div>

      <div className='text-center text-white font-bold p-8'>
        Made with lots of ❤️ and ☕. :)
      </div>
    </div>
  );
}

export default About;
