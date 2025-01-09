import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Metadata = ({
  title,
  description,
  keywords,
  author,
  robots,
  url,
  image,
  twitterHandle,
  themeColor,
  canonical,
}) => {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={author} />
      <meta name='robots' content={robots} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {canonical && <link rel='canonical' href={canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={title} />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}
      {twitterHandle && <meta name='twitter:site' content={twitterHandle} />}
      {twitterHandle && <meta name='twitter:creator' content={twitterHandle} />}

      {/* Progressive Web App (PWA) Meta Tags */}
      <meta name='theme-color' content={themeColor} />
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <meta name='apple-mobile-web-app-title' content={title} />
      <meta name='application-name' content={title} />
      <meta name='msapplication-TileColor' content={themeColor} />
      {canonical && <meta name='msapplication-config' content='/browserconfig.xml' />}
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    </Helmet>
  );
};

// Define default props
Metadata.defaultProps = {
  title: 'ChaosWeb',
  description:
    'Welcome to ChaosWeb — a web design experiment where nothing behaves as it should, and everything is delightfully out of order! Explore unpredictable navigation, bizarre sliders, and a world where scrolling defies gravity.',
  keywords: 'web design, chaos, experiment, unpredictable, navigation, sliders',
  author: 'Your Name',
  robots: 'index, follow',
  url: 'https://chaosweb.vercel.app',
  image: 'https://chaosweb.vercel.app/og-image.jpg', // Replace with your actual image URL
  twitterHandle: '@YourTwitterHandle', // Replace with your actual Twitter handle
  themeColor: '#ffffff',
  canonical: 'https://chaosweb.vercel.app',
};

// Define prop types for better type checking
Metadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  robots: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  twitterHandle: PropTypes.string,
  themeColor: PropTypes.string,
  canonical: PropTypes.string,
};

export default Metadata;