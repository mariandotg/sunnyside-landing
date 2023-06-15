import React from 'react';
import '../../styles/globals.css';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Sunnyside agency',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={params.lang}>
      <body className='desktop:relative'>
        {/* @ts-expect-error Async Server Component */}
        <NavBar locale={params.lang} />
        {children}
        {/* @ts-expect-error Async Server Component */}
        <Footer locale={params.lang} />
      </body>
    </html>
  );
}
