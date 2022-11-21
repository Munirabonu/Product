import React from "react";

import Navbar from "../../components/Navbar/Index";
import Hero from "../../components/Hero/Index";
import ForYou from "../../components/For_you/Index";
import Join from "../../components/Join/Index";
import Management from "../../components/Management/Index";
import Collaborative from "../../components/Collaborative/Index";
import CustomerSupport from "../../components/CustomerSupport/Index";
import Price from "../../components/Price/Index";
import Carousel from "../../components/Carousel/Index";
import Process from "../../components/Process/Index";
import ClientFeedback from "../../components/ClientsFeedback/Index";
import Footer from "../../components/Footer/Index";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ForYou />
      <Management />
      <CustomerSupport />
      <Collaborative />
      <Process />
      <Carousel />
      <Price />
      <ClientFeedback />
      <Join />
      <Footer />
    </>
  );
}
