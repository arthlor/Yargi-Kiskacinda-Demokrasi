import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const siteUrl = window.location.origin;
  const imageUrl = `${siteUrl}/assets/hero.jpg`;

  const defaultTitle = 'Yargı Kıskacında Demokrasi';
  const defaultDescription = "19 Mart'ta başlayan ve CHP'li belediyeleri hedef alan siyasi operasyonların interaktif haritası, kronolojisi ve veri merkezi.";
  const defaultKeywords = "CHP, operasyon, yargı, demokrasi, adalet, Türkiye, siyaset, Ekrem İmamoğlu, İBB, seçim, hukuk";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: imageUrl,
    url: window.location.href,
  }

  return (
    <Helmet
      title={seo.title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Anıl Karaca" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO; 