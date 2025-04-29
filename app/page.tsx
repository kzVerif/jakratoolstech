'use client';

import React from 'react';
import Mainpage from './components/Mainpage';
import Blog from './components/Blog';
import Product from './components/Product';

export default function HomePage() {
  return (
    <main className="font-kanit">
      {/* Hero Section */}
      <Mainpage/>

      {/* About Section */}
      <Blog/>

      {/* Product Section */}
      <Product/>
    </main>
  );
}
