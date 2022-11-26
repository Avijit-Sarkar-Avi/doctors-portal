import React from 'react';
import chairImg from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chairImg} alt='dentist chair' className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default AppoinmentBanner;