import 'server-only';

interface Section {
  label: string;
  path: string;
}

interface Service {
  title: string;
  description: string;
  imagePath: string;
}

interface Testimonial {
  text: string;
  author: string;
  position: string;
  imagePath: string;
}

interface GalleryImage {
  imageAlt: string;
  imagePath: string;
}

interface Footer {
  madeIn: string;
  copyright: string;
}

interface Dictionary {
  sections: Section[];
  tagline: string;
  transformSubtitle: string;
  transformDescription: string;
  standOutSubtitle: string;
  standOutDescription: string;
  learnMore: string;
  services: Service[];
  testimonialsSubtitle: string;
  testimonials: Testimonial[];
  galleryImgs: GalleryImage[];
  footer: Footer;
}

interface Dictionaries {
  [index: string]: () => Promise<Dictionary>;
}

const dictionaries: Dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
