import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, image, bgClass } = card;
    return (
        <div className={`card md:card-side shadow-xl p-6 ${bgClass}`}>
            <figure><img className='w-86 h-86' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <p className='text-white'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;