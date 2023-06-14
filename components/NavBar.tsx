import Logo from '../public/logo.svg';
import Hamburger from './Hamburger';

const NavBar = () => {
  return (
    <div className='relative flex justify-between px-6 py-8 bg-light-blue'>
      <Logo className='w-[123px] h-6' fill='#FF0000' />
      <Hamburger />
    </div>
  );
};

export default NavBar;
