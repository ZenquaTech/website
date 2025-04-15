interface LocalBusinessSchema {
    "@context": string;
    "@type": string;
    name: string;
    image?: string;
    url: string;
    telephone: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo?: {
      "@type": string;
      latitude: string;
      longitude: string;
    };
    openingHoursSpecification?: {
      "@type": string;
      dayOfWeek: string[];
      opens: string;
      closes: string;
    };
    priceRange?: string;
    description: string;
    sameAs?: string[];
  }
  
  export default function SchemaMarkup() {
    const schema: LocalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Zenqua",
      "url": "https://zenqua.com",
      "image": "https://zenqua.com/logo.png",
      "telephone": "+91XXXXXXXXXX",
      "description": "Zenqua - Top Vue.js development company and IT solutions provider in Indore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.7196",
        "longitude": "75.8577"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://linkedin.com/company/zenqua",
        "https://twitter.com/zenqua",
        "https://facebook.com/zenqua"
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }