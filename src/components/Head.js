import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <html lang="en" />
    <title>Blockbook</title>
    <meta name="description" content="Introduction to Blockchain technology" />
    <meta
      name="keywords"
      content="blockchain,bitcoin,book,technology,cryptocurrency"
    />
    <meta property="og:url" content="https://blockbook.cc/" />
    <meta property="og:site_name" content="Blockbook" />
    <meta property="og:title" content="Blockbook" />
    <meta
      property="og:description"
      content="Introduction to Blockchain technology"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://blockbook.cc/blockbook-logo-square.png"
    />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@abitcompany" />
    <meta name="twitter:creator" content="@abitcompany" />
    <meta name="twitter:title" content="abitcompany" />
    <meta
      name="twitter:description"
      content="Introduction to Blockchain technology"
    />
    <meta
      name="twitter:image"
      content="https://blockbook.cc/blockbook-logo-square.png"
    />
  </Helmet>
);

export default Head;
