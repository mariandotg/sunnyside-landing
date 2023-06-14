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
      <section className='w-full pt-7 bg-light-blue'>
        <div className='relative w-full flex justify-center items-center h-[400px]'>
          <div className='absolute flex flex-col items-center justify-center w-full top-6 gap-y-12'>
            <h1 className='z-10 font-black tracking-[.15em] text-center text-white uppercase font-fraunces text-title '>
              {dict.tagline}
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
            {dict.transformSubtitle}
          </h2>
          <p className='text-center text-dark-grayish-blue font-barlow text'>
            {dict.transformDescription}
          </p>
          <button className='p-2 font-black tracking-wider uppercase text-button bg-light-blue text-very-dark-desaturated-blue font-fraunces'>
            {dict.learnMore}
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
            {dict.standOutSubtitle}
          </h2>
          <p className='text-center text-dark-grayish-blue font-barlow text'>
            {dict.standOutDescription}
          </p>
          <button className='p-2 font-black tracking-wider uppercase text-button bg-light-blue text-very-dark-desaturated-blue font-fraunces'>
            {dict.learnMore}
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full'>
        {dict.services.map((service, index) => (
          <div
            key={index}
            className='relative overflow-hidden w-full flex justify-center items-center h-[600px]'
          >
            <div className='absolute z-10 flex flex-col items-center justify-center px-5 gap-7 bottom-16'>
              <h2 className='font-black max-w-[275px] text-dark-desaturated-cyan text-center font-fraunces text-service-title'>
                {service.title}
              </h2>
              <p className='text-center text-dark-desaturated-cyan font-barlow text-service-paragraph'>
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
      <section className='flex flex-col items-center px-6 py-14 gap-y-16'>
        <h2 className='font-bold uppercase text-center tracking-[.25em] text-grayish-blue font-fraunces'>
          {dict.testimonialsSubtitle}
        </h2>
        {dict.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-y-8'
          >
            <Image
              alt={testimonial.author}
              src={`/${testimonial.imagePath}`}
              className='rounded-full'
              width={64}
              height={64}
            />
            <p className='text-center text-very-dark-grayish-blue font-barlow text'>
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
      </section>
      <section className='grid w-full grid-cols-2 grid-rows-2 h-[400px]'>
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
