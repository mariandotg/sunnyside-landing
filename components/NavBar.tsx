import { getDictionary } from '@/static/dictionaries';
import Logo from '../public/logo.svg';
import Hamburger from './Hamburger';

interface Props {
  locale: string;
}

const NavBar = async ({ locale }: Props) => {
  const dict = await getDictionary(locale);

  return (
    <div className='relative flex justify-between px-6 py-8 bg-light-blue'>
      <Logo className='w-[123px] h-6' fill='#FF0000' />
      <Hamburger>
        {dict.sections.map((section, index) => {
          if (section.path === '#contact') {
            return (
              <li key={index}>
                <button className='py-4 uppercase rounded-full px-7 text-copyright text-very-dark-desaturated-blue font-fraunces bg-yellow w-fit'>
                  {section.label}
                </button>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <a href={section.path}>{section.label}</a>
              </li>
            );
          }
        })}
      </Hamburger>
    </div>
  );
};

export default NavBar;
