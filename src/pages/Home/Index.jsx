import React from "react";
import Navbar from "../../components/Navbar/Index";
import Hero from "../../components/Hero/Index";
import ForYou from "../../components/For_you/Index";
import Join from "../../components/Join/Index";
import Management from "../../components/Management/Index";
import Collaborative from "../../components/Collaborative/Index";
import CustomerSupport from "../../components/CustomerSupport/Index";
import Price from '../../components/Price/Index';
import ClientFeedback from "../../components/ClientsFeedback/Index";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ForYou />  
      <Join/>
      <Management />
      <CustomerSupport />
      <Collaborative />
      <ClientFeedback />
      <Price />
      <Join />
    </>
  );

}
