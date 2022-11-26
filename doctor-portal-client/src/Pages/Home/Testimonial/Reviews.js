import React from 'react';

const Reviews = ({ review }) => {
    const { name, location, comment, image } = review;
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl ">
            <div className="card-body">
                <p>{comment}</p>
                <div className='flex align-center mt-6'>
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;