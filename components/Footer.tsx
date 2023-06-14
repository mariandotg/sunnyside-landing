import Logo from '../public/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-[#90D4C5] h-fit w-full '>
      <div className='flex flex-col items-center px-8 py-12 gap-y-10'>
        <Logo
          className='fill-dark-desaturated-cyan w-[123px] h-6'
          fill='#FF0000'
        />
        <ul className='flex justify-between w-full font-black font-barlow text text-dark-moderate-cyan'>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </div>
      <div className='bg-[#080808] w-full flex items-center flex-col gap-y-2 h-fit pt-4 pb-8 text-white font-ibm-mono italic text-copyright'>
        <p className='flex items-center gap-x-2'>
          Hecho en Buenos Aires, Argentina
        </p>
        <span className=''>2023 © Mariano Guillaume</span>
      </div>
    </footer>
  );
};

export default Footer;
