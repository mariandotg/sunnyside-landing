import Image from 'next/image';
import IconArrowDown from '@/public/icon-arrow-down.svg';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <section className='w-full pt-7 bg-light-blue'>
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
          <p className='text-center text-dark-grayish-blue font-barlow text'>
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
      <section className='flex flex-col w-full'>
        <div className='relative w-full flex justify-center items-center h-[300px]'>
          <Image
            alt='Stand out'
            src='/desktop/image-stand-out.jpg'
            className='absolute z-0 object-cover -top-1'
            fill={true}
          />
        </div>
        <div className='flex flex-col items-center justify-center py-16 px-7 gap-y-7'>
          <h2 className='font-black max-w-[275px] text-very-dark-desaturated-blue text-center font-fraunces text-subtitle'>
            Stand out to the right audience
          </h2>
          <p className='text-center text-dark-grayish-blue font-barlow text'>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className='p-2 font-black tracking-wider uppercase text-button bg-light-blue text-very-dark-desaturated-blue font-fraunces'>
            Learn more
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full'>
        <div className='relative overflow-hidden w-full flex justify-center items-center h-[600px]'>
          <div className='absolute z-10 flex flex-col items-center justify-center px-5 gap-7 bottom-16'>
            <h2 className='font-black max-w-[275px] text-dark-desaturated-cyan text-center font-fraunces text-service-title'>
              Graphic Design
            </h2>
            <p className='text-center text-dark-desaturated-cyan font-barlow text-service-paragraph'>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
          <Image
            alt='Stand out'
            src='/desktop/image-graphic-design.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
        <div className='relative overflow-hidden w-full flex justify-center items-center h-[600px]'>
          <div className='absolute z-10 flex flex-col items-center justify-center px-5 gap-7 bottom-16'>
            <h2 className='font-black max-w-[275px] text-dark-blue text-center font-fraunces text-service-title'>
              Photography
            </h2>
            <p className='text-center text-dark-blue font-barlow text-service-paragraph'>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
          <Image
            alt='Stand out'
            src='/desktop/image-photography.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
      </section>
      <section className='flex flex-col items-center px-6 py-14 gap-y-16'>
        <h2 className='font-bold uppercase tracking-[.25em] text-grayish-blue font-fraunces'>
          Client testimonials
        </h2>
        <div className='flex flex-col items-center justify-center gap-y-8'>
          <Image
            alt='Emily R.'
            src='/image-emily.jpg'
            className='rounded-full'
            width={64}
            height={64}
          />
          <p className='text-center text-very-dark-grayish-blue font-barlow text'>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className='flex flex-col items-center justify-center gap-y-3'>
            <h3 className='font-black text-very-dark-desaturated-blue font-fraunces text'>
              Emily R.
            </h3>
            <span className='text-grayish-blue font-barlow text-button'>
              Marketing Director
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-8'>
          <Image
            alt='Emily R.'
            src='/image-emily.jpg'
            className='rounded-full'
            width={64}
            height={64}
          />
          <p className='text-center text-very-dark-grayish-blue font-barlow text'>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className='flex flex-col items-center justify-center gap-y-3'>
            <h3 className='font-black text-very-dark-desaturated-blue font-fraunces text'>
              Emily R.
            </h3>
            <span className='text-grayish-blue font-barlow text-button'>
              Marketing Director
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-8'>
          <Image
            alt='Emily R.'
            src='/image-emily.jpg'
            className='rounded-full'
            width={64}
            height={64}
          />
          <p className='text-center text-very-dark-grayish-blue font-barlow text'>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className='flex flex-col items-center justify-center gap-y-3'>
            <h3 className='font-black text-very-dark-desaturated-blue font-fraunces text'>
              Emily R.
            </h3>
            <span className='text-grayish-blue font-barlow text-button'>
              Marketing Director
            </span>
          </div>
        </div>
      </section>
      <section className='grid w-full grid-cols-2 grid-rows-2 h-[400px]'>
        <div className='relative col-span-1'>
          <Image
            alt='Milk Bottles'
            src='/desktop/image-gallery-milkbottles.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
        <div className='relative col-span-1'>
          <Image
            alt='Orange'
            src='/desktop/image-gallery-orange.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
        <div className='relative col-span-1'>
          <Image
            alt='Cone'
            src='/desktop/image-gallery-cone.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
        <div className='relative col-span-1'>
          <Image
            alt='Sugar Cubes'
            src='/desktop/image-gallery-sugarcubes.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
