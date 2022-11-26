import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AppoinmentBody from '../AppoinmentBody/AppoinmentBody';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>

            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoinmentBanner>
            <AppoinmentBody
                selectedDate={selectedDate}
            ></AppoinmentBody>
        </div>
    );
};

export default Appoinment;