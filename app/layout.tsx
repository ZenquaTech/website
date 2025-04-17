// app/layout.tsx
import './css/style.css';
import { Metadata } from 'next';
import ClientRootLayout from './ClientRootLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zenqua.com'),
  title: 'Zenqua | Custom Software Solutions',
  description: 'Top Software Development company in Indore offering Custom Solutions...',
  openGraph: {
    title: 'Zenqua | Custom Software Solutions',
    description: 'Top Software Development company in Indore...',
    url: 'https://www.zenqua.com',
    siteName: 'Zenqua Technology',
    images: [
      {
        url: '/images/zenqua-og-image.jpg',
        width: 1600,
        height: 400,
        alt: 'Zenqua OG Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenqua | Custom Software Solutions',
    description: 'Top Software Development company in Indore...',
    images: ['/images/zenqua-og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
