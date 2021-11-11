import React from 'react';
import img from '../../../images/about.jpg';

const About = ()=>{
    return(
        <div className='container mx-auto mt-4 mb-4'>
            <h2 className='text-warning fw-bold'>About</h2>
            <hr className="bg-warning w-25 mx-auto"/>
            <div className='row'>
                <div className='col-12 col-md-6 '>
                    <h1 className='text-danger fw-bold'>Visit the World</h1>
                    <p>KJML Adventures offers you a wide choice for your vacations at more than 5,000 campsites across Europe. With the whole family or for a romantic weekend break, for a holiday in a tent or in a motorhome, or for services similar to those of the best hotels in a mobile home, anything’s possible. Enjoy a wide variety of landscapes, traditions and heritage sites booking at a campsite in France. Are you a fan of nautical activities? The establishments on the Atlantic coast await you: a campsite in La Rochelle to discover Ile de Ré on a bike, a campsite in Brittany, a land filled with myths and legends, or even a campsite in the Landes to combine surfing and walks in the forest . For children, the calmer waters and campsites of the Côte d´Azur might be a wiser choice: camping in Languedoc-Roussillon, camping in Cap d'Agde or camping in Corsica, YOU get to choose! For freshwater nautical activities, a campsite in Ardèche is what you need. You’re a nature lover? Go camping in the Pyrenees or camping in the Alps then. Browse our offers and book in just a few clicks on Camping Direct, the leading European portal for camping holidays!</p>

                </div>
                <div className='col-12 col-md-6'>
                    <img src={img} className='img-fluid' alt='pic'/>

                </div>

            </div>


        </div>

    );
};
export default About;