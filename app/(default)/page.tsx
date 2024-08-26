// pages/index.js (or your main page file)
import Head from 'next/head';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';

export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": metadata.title,
              "description": metadata.description,
              "url": "https://www.zenqua.com"
            })
          }}
        />
      </Head>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  );
}
