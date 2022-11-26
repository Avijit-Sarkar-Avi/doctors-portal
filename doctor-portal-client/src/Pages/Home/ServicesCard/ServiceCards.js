import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
import Exceptional from './Exceptional';
import SectionText from '../../../Components/SectionText/SectionText';

const ServiceCards = () => {
    const serviceData = [
        {
            id: 1,
            titleName: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            titleName: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
            titleName: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        },
    ]
    return (
        <div className=' mt-32'>
            <div className='text-center'>
                <SectionText>Services</SectionText>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                {
                    serviceData.map(services =>
                        <ServiceCard
                            key={services.id}
                            services={services}
                        ></ServiceCard>)
                }
            </div>

            <Exceptional></Exceptional>
        </div>
    );
};

export default ServiceCards;