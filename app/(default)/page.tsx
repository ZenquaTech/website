import Head from 'next/head';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';

export const metadata = {
  title: 'Zenqua Technologies Pvt Ltd',
  description: 'Page description',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://www.zenqua.com/favicon.ico" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zenqua Technologies Pvt Ltd",
              "url": "https://www.zenqua.com",
              "logo": "https://www.zenqua.com/favicon.ico",
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
                }
              ],
            }),
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.zenqua.com",
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact Us",
                  "item": "https://www.zenqua.com/contact-us",
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Careers",
                  "item": "https://www.zenqua.com/career",
                }
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
