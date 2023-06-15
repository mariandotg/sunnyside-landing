import Image from 'next/image';
import IconArrowDown from '@/public/icon-arrow-down.svg';
import { getDictionary } from '@/static/dictionaries';

interface Props {
  params: {
    lang: string;
  };
}

export default async function Home({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return (
    <main className='flex flex-col items-center justify-between'>
      <section className='w-full'>
        <div className='relative w-full flex justify-center items-center h-[400px] desktop:h-[800px]'>
          <div className='absolute flex flex-col items-center justify-center w-full top-6 desktop:top-56 desktop:gap-y-20 gap-y-12'>
            <h1 className='z-10 font-black tracking-[.15em] text-center text-white uppercase font-fraunces text-title '>
              {dict.tagline}
            </h1>
            <IconArrowDown className='z-10 w-[36px] h-[116px]' />
          </div>
          <Image
            alt='Hero'
            src='/desktop/image-header.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
      </section>
      <section className='flex flex-col-reverse w-full desktop:grid desktop:grid-cols-2'>
        <div className='flex flex-col items-center justify-center py-16 desktop:items-start px-7 gap-y-7 desktop:px-28 desktop:py-36'>
          <h2 className='font-black desktop:text-left max-w-[275px] text-very-dark-desaturated-blue text-center font-fraunces text-subtitle'>
            {dict.transformSubtitle}
          </h2>
          <p className='text-center desktop:text-left text-dark-grayish-blue font-barlow text'>
            {dict.transformDescription}
          </p>
          <button className='base-button after:bg-yellow'>
            {dict.learnMore}
          </button>
        </div>
        <div className='relative flex items-center justify-center w-full'>
          <Image
            alt='Transform'
            src='/desktop/image-transform.jpg'
            className='absolute z-0 object-cover'
            fill={true}
          />
        </div>
      </section>
      <section className='flex flex-col w-full desktop:grid desktop:grid-cols-2'>
        <div className='relative flex items-center justify-center w-full'>
          <Image
            alt='Stand out'
            src='/desktop/image-stand-out.jpg'
            className='absolute z-0 object-cover -top-1'
            fill={true}
          />
        </div>
        <div className='flex flex-col items-center justify-center py-16 desktop:items-start px-7 gap-y-7 desktop:px-28 desktop:py-36'>
          <h2 className='font-black text-center desktop:text-left desktop:max-w-none text-very-dark-desaturated-blue font-fraunces text-subtitle'>
            {dict.standOutSubtitle}
          </h2>
          <p className='text-center desktop:text-left text-dark-grayish-blue font-barlow text'>
            {dict.standOutDescription}
          </p>
          <button className='base-button after:bg-soft-red'>
            {dict.learnMore}
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full desktop:grid desktop:grid-cols-2'>
        {dict.services.map((service, index) => (
          <div
            key={index}
            className='relative overflow-hidden w-full flex justify-center items-center h-[600px]'
          >
            <div className='absolute z-10 flex flex-col items-center justify-center px-5 gap-7 bottom-16'>
              <h2 className='font-black max-w-[275px] text-dark-desaturated-cyan text-center font-fraunces text-service-title'>
                {service.title}
              </h2>
              <p className='text-center text-dark-desaturated-cyan font-barlow text-service-paragraph max-w-[300px]'>
                {service.description}
              </p>
            </div>
            <Image
              alt='Stand out'
              src={`/desktop/${service.imagePath}`}
              className='absolute z-0 object-cover'
              fill={true}
            />
          </div>
        ))}
      </section>
      <section className='flex flex-col items-center px-6 py-14 gap-y-16 desktop:py-32 desktop:px-32'>
        <h2 className='font-bold uppercase text-center tracking-[.25em] text-grayish-blue font-fraunces'>
          {dict.testimonialsSubtitle}
        </h2>
        <div className='grid items-center grid-cols-1 gap-16 desktop:grid-cols-3'>
          {dict.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center h-full gap-y-8 desktop:grid desktop:grid-rows-3 desktop:justify-items-center'
            >
              <Image
                alt={testimonial.author}
                src={`/${testimonial.imagePath}`}
                className='rounded-full'
                width={64}
                height={64}
              />
              <p className='h-full text-center text-very-dark-grayish-blue font-barlow text'>
                {testimonial.text}
              </p>
              <div className='flex flex-col items-center justify-center gap-y-3'>
                <h3 className='font-black text-very-dark-desaturated-blue font-fraunces text'>
                  {testimonial.author}
                </h3>
                <span className='text-grayish-blue font-barlow text-button'>
                  {testimonial.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='grid w-full grid-cols-2 grid-rows-2 h-[400px] desktop:grid-cols-4 desktop:grid-rows-1'>
        {dict.galleryImgs.map((image, index) => (
          <div key={index} className='relative col-span-1'>
            <Image
              alt={image.imageAlt}
              src={`/desktop/${image.imagePath}`}
              className='absolute z-0 object-cover'
              fill={true}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
