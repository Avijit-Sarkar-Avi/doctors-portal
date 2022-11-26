import React from 'react';
import treatmentImage from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Exceptional = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row lg:p-32">

                <img src={treatmentImage} alt='' className="w-96 rounded-lg shadow-2xl" />

                <div className='lg:pl-24'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Services</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;