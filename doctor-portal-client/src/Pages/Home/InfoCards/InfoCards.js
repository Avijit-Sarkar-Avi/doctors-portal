import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import marker from '../../../assets/icons/marker.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 pm to 5:00 pm everyday',
            image: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            image: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+88012345678',
            image: phone,
            bgClass: 'bg-primary'
        },
    ]

    return (
        <div className='mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card =>
                    <InfoCard
                        key={card.id}
                        card={card}
                    ></InfoCard>
                )
            }
        </div>
    );
};

export default InfoCards;