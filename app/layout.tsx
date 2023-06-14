import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sunnyside agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
