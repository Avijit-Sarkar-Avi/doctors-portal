import React from 'react';

const ServiceCard = ({ services }) => {
    const { titleName, details, icon } = services;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{titleName}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;