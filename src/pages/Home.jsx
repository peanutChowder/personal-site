import React from 'react';

import Header from '../home-partials/Header';
import PageIllustration from '../home-partials/PageIllustration';
import HeroHome from '../home-partials/HeroHome';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter /> */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;