import React from 'react';
import bgImg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import SectionText from '../../../Components/SectionText/SectionText';

const ContectUs = () => {
    return (
        <div style={{ background: `url(${bgImg})` }}>
            <div className='text-center pt-10'>
                <SectionText>Contect Us</SectionText>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-control w-28 md:ml-24">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContectUs;