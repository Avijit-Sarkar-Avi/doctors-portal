import React from 'react';


const AppoinmentOption = ({ appionments, setTreatment }) => {
    const { name, price, slots } = appionments;
    return (
        <div>
            <div className="card shadow-xl mt-20">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions">
                        <label onClick={() => setTreatment(appionments)}
                            disabled={slots?.length === 0}
                            htmlFor="booking-modal" className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Book Appoinment</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppoinmentOption;