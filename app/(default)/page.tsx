import Head from 'next/head';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';

export const metadata = {
  title: 'Zenqua Technologies',
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
              "@type": "Organization",
              "name": "Zenqua Technologies",
              "url": "https://zenqua.com",
              "logo": "/favicon.ico",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://zenqua.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              "mainEntity": [
                {
                  "@type": "WebPage",
                  "@id": "https://zenqua.com/contact-us",
                  "name": "Contact Us",
                  "url": "https://zenqua.com/contact-us",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://zenqua.com/career",
                  "name": "Careers",
                  "url": "https://zenqua.com/career",
                },
              ],
            }),
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
