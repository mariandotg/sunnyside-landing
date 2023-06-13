import Image from 'next/image';
import IconArrowDown from '@/public/icon-arrow-down.svg';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen'>
      <div className='h-[150px] w-full bg-light-blue'></div>
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
    </main>
  );
}
