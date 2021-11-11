import React from "react";

import Banner from '../Banner/Banner';
import Destinations from "../Destinations/Destinations";


const Home = () => {

    return (
        <div className="">
          <div className="mb-2">
            <Banner></Banner>
          </div>
          
          <div className="mb-2">
            <Destinations></Destinations>
          </div>
          
        </div>
    );
};

export default Home;