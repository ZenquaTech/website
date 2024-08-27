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
              "url": "https://www.zenqua.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.zenqua.com/favicon.ico",
                "width": 128,
                "height": 128,
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.zenqua.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              "mainEntity": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.zenqua.com/contact-us",
                  "name": "Contact Us",
                  "url": "https://www.zenqua.com/contact-us",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.zenqua.com/career",
                  "name": "Careers",
                  "url": "https://www.zenqua.com/career",
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