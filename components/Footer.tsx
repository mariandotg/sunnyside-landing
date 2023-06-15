import { getDictionary } from '@/static/dictionaries';
import Logo from '../public/logo.svg';

interface Props {
  locale: string;
}

const Footer = async ({ locale }: Props) => {
  const dict = await getDictionary(locale);

  return (
    <footer className='bg-[#90D4C5] h-fit w-full '>
      <div className='flex flex-col items-center px-8 py-12 gap-y-10'>
        <Logo
          className='fill-dark-desaturated-cyan w-[123px] h-6'
          fill='#FF0000'
        />
        <ul className='flex justify-between gap-8 font-black font-barlow text text-dark-moderate-cyan'>
          {dict.sections.map((section, index) => {
            if (index !== dict.sections.length - 1) {
              return (
                <li key={index}>
                  <a href={section.path}>{section.label}</a>
                </li>
              );
            } else return <></>;
          })}
        </ul>
      </div>
      <div className='bg-[#080808] w-full flex items-center flex-col gap-y-2 h-fit py-4 text-white font-ibm-mono italic text-copyright'>
        <p className='flex items-center gap-x-2'>{dict.footer.madeIn}</p>
        <span>{dict.footer.copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
