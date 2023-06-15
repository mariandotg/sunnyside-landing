'use client';
import { useState, ReactNode } from 'react';
import HamburgerIcon from '../public/icon-hamburger.svg';

interface Props {
  children: ReactNode;
}

const Hamburger = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className='flex desktop:hidden'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <HamburgerIcon className='w-6 h-6' />
      </button>
      {isOpen && (
        <div className='desktop:hidden absolute z-20 flex flex-col w-[calc(100%-48px)] top-[88px]'>
          <div className='self-end before-triangle'></div>
          <ul className='flex flex-col items-center w-full p-12 font-black bg-white text-button font-barlow text-dark-grayish-blue gap-y-8'>
            {children}
          </ul>
        </div>
      )}
    </>
  );
};

export default Hamburger;
