import React from 'react';

import ForYou from '../../components/For_you/Index';
import Navbar from '../../components/Navbar/Index';
import Hero from "../../components/Hero/Index"
import Join from "../../components/Join/Index"
import Price from '../../components/Price/Index';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <ForYou />
      <Price />
      <Join/>
    </div>
  )
}
