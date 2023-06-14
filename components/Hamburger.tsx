'use client';
import { useState } from 'react';
import HamburgerIcon from '../public/icon-hamburger.svg';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <HamburgerIcon className='w-6 h-6' />
      </button>
      {isOpen && (
        <div className='absolute z-20 flex flex-col w-[calc(100%-48px)] top-[88px]'>
          <div className='self-end before-triangle'></div>
          <ul className='flex flex-col items-center w-full p-12 font-black bg-white text-button font-barlow text-dark-grayish-blue gap-y-8'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <button className='py-4 uppercase rounded-full px-7 text-copyright text-very-dark-desaturated-blue font-fraunces bg-yellow w-fit'>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Hamburger;
