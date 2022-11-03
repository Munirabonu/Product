import React from 'react';
import ForYou from '../../components/For_you/Index';
import Navbar from '../../components/Navbar/Index';
import Hero from "../../components/Hero/Index"
import Join from "../../components/Join/Index"
import Management from '../../components/Management/Index';
import Collaborative from '../../components/Collaborative/Index';
import CustomerSupport from '../../components/CustomerSupport/Index';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ForYou />
      <Management />
      <CustomerSupport/>
      <Collaborative/>
      <Join/>
    </div>
  )
}
