import { getDictionary } from '@/static/dictionaries';
import Logo from '../public/logo.svg';
import Hamburger from './Hamburger';

interface Props {
  locale: string;
}

const NavBar = async ({ locale }: Props) => {
  const dict = await getDictionary(locale);

  const renderMenu = () =>
    dict.sections.map((section, index) => {
      if (section.path === '#contact') {
        return (
          <li key={index}>
            <button className='py-4 uppercase rounded-full px-7 text-copyright text-very-dark-desaturated-blue font-fraunces bg-yellow desktop:bg-white w-fit'>
              {section.label}
            </button>
          </li>
        );
      } else {
        return (
          <li key={index} className='desktop:text-white'>
            <a href={section.path}>{section.label}</a>
          </li>
        );
      }
    });

  return (
    <div className='relative flex items-center justify-between px-6 py-8 bg-light-blue desktop:absolute desktop:z-[9999] desktop:w-full'>
      <Logo className='w-[123px] h-6' fill='#FF0000' />
      <Hamburger>{renderMenu()}</Hamburger>
      <ul className='items-center hidden desktop:flex gap-x-8'>
        {renderMenu()}
      </ul>
    </div>
  );
};

export default NavBar;
