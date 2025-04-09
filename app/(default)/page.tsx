import Head from 'next/head';
import Hero from '@/components/hero';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const LazyFeatures = dynamic(() => import("@/components/features"));
const LazyTestimonials = dynamic(() => import("@/components/testimonials"));
const LazyZigzag = dynamic(() => import("@/components/zigzag"));

export const metadata = {
  title: 'The leading Custom Software development solutions | Zenqua technology',
  description: 'Top Software Development company In Indore offering Custom Solutions,app Development, Web design, and IT Services For Businesses WorldWide',
  keywords: "best it custom software development company 2024 , best software development company in indore, top it services company in indore,best software services in indore, custom software development company , best app development company in indore, software development companies"
};

export default function Home() {
  return (
    <>
      <Head>
        {/* Standard Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        
        {/* Favicon (for browser tab) */}
        <link rel="icon" href="https://www.zenqua.com/favicon.ico" />
        <link rel="apple-touch-icon" href="https://www.zenqua.com/favicon.ico" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://www.zenqua.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.zenqua.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zenqua Technology" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.zenqua.com/og-image.png" />

        {/* Organization Schema */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zenqua Technologies Pvt Ltd",
              url: "https://www.zenqua.com",
              logo: "https://www.zenqua.com/favicon.ico",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.zenqua.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              mainEntity: [
                {
                  "@type": "WebPage",
                  "@id": "https://www.zenqua.com/contact-us",
                  name: "Contact Us",
                  url: "https://www.zenqua.com/contact-us",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.zenqua.com/career",
                  name: "Careers",
                  url: "https://www.zenqua.com/career",
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.zenqua.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact Us",
                  item: "https://www.zenqua.com/contact-us",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Careers",
                  item: "https://www.zenqua.com/career",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <Hero />
      <LazyFeatures />
      <LazyZigzag />
      <LazyTestimonials />
    </>
  );
}