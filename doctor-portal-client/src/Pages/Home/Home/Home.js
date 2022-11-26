import React from 'react';
import Banner from '../Banner/Banner';
import ContectUs from '../ContectUs/ContectUs';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import ServiceCards from '../ServicesCard/ServiceCards';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceCards></ServiceCards>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <ContectUs></ContectUs>
        </div>
    );
};

export default Home;