import React from 'react';
import doctorImg from '../../../assets/images/doctor.png'
import appoinmentImg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import SectionText from '../../../Components/SectionText/SectionText';

const MakeAppoinment = () => {
    return (
        <section className='mt-32'
            style={{ background: `url(${appoinmentImg})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctorImg} alt=''
                        className="lg:w-1/2 rounded-lg shadow-2xl -mt-32 hidden md:block" />
                    <div>
                        <SectionText>Appoinment</SectionText>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appoinment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;