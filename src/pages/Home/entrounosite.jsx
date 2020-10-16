import React, { useContext } from 'react';

import Navbar from 'components/navbar'
import Cardhome from 'components/cardhome'
import Cardhome1 from 'components/cardhome1'
import Cardhome2 from 'components/cardhome2'
import Bemvindo from 'components/jumbotron'
import Footer from 'components/footer'
import Carousel from 'components/carousel'
import './Home.css';

function entrounosite(){
  return (
    <div className="">
      <Navbar />
      
      <Carousel />
      <div className="container">
        <div className="background">
          </div>
        <Bemvindo/>
        <div className="row m-4">
          <Cardhome/>
          <Cardhome1/>
          <Cardhome2/>
        </div>
      </div>
      <Footer/>
   </div>
  );
};

export default entrounosite;
