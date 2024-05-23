import React from 'react';
import Head from 'next/head';
import Home from './home';

const Index: React.FC = () => {
  return (
    <div>
      <Head>
        <title>aaaa</title>
        <meta name="description" content="My personal portfolio website" />
      </Head>
      <Home />
    </div>
  );
};

export default Index;
