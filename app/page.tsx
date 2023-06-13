import Image from 'next/image';
import IconArrowDown from '@/public/icon-arrow-down.svg';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen'>
      <section className='bg-light-blue pt-[150px] w-full'>
        <div className='relative w-full flex justify-center items-center h-[400px]'>
          <div className='absolute flex flex-col items-center justify-center w-full top-6 gap-y-12'>
            <h1 className='z-10 font-black tracking-[.15em] text-center text-white uppercase font-fraunces text-title '>
              We are creatives
            </h1>
            <IconArrowDown className='z-10 w-[36px] h-[116px]' />
          </div>
          <Image
            alt='Hero'
            src='/desktop/image-header.jpg'
            className='absolute z-0 object-cover -top-1'
            fill={true}
          />
        </div>
      </section>
      <section className='flex flex-col-reverse w-full'>
        <div className='flex flex-col items-center justify-center py-16 px-7 gap-y-7'>
          <h2 className='font-black max-w-[275px] text-very-dark-desaturated-blue text-center font-fraunces text-subtitle'>
            Transform your brand
          </h2>
          <p className='tracking-tight text-center text-dark-grayish-blue font-barlow text'>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className='p-2 font-black tracking-wider uppercase text-button bg-light-blue text-very-dark-desaturated-blue font-fraunces'>
            Learn more
          </button>
        </div>
        <div className='relative w-full flex justify-center items-center h-[300px]'>
          <Image
            alt='Transform'
            src='/desktop/image-transform.jpg'
            className='absolute z-0 object-cover -top-1'
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
