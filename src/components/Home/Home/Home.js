import React from "react";
import About from "../About/About";

import Banner from '../Banner/Banner';
import Destinations from "../Destinations/Destinations";
import Contact from "../Contact/Contact";


const Home = () => {

    return (
        <div className="">
          <div className="mb-2">
            <Banner></Banner>
          </div>
          
          <div className="mb-2">
            <Destinations></Destinations>
          </div>
          
          <div className="mb-2">
            <About></About>
          </div>
          
          <div className="mb-2">
            <Contact></Contact>
          </div>
          
          
        </div>
    );
};

export default Home;