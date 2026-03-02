import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Louay Awadh - Full Stack Developer Portfolio",
  description = "Portfolio of Louay Awadh, a full stack web developer specializing in React, Tailwind CSS, JavaScript, and modern web technologies.",
  name = "Louay Awadh",
  type = "website",
  image = "https://louay-portfolio.onrender.com/og-image.svg",
  url = "https://louay-portfolio.onrender.com/"
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
