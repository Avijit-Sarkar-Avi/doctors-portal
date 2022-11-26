import React from 'react';
import SectionText from '../../../Components/SectionText/SectionText';
import quoteImg from '../../../assets/icons/quote.svg'
import reviewerImg1 from '../../../assets/images/people1.png'
import reviewerImg2 from '../../../assets/images/people2.png'
import reviewerImg3 from '../../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonials = () => {

    const reviewers = [
        {
            id: 1,
            name: 'Winson Herry',
            location: 'California',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: reviewerImg1
        },
        {
            id: 2,
            name: 'Winson Herry',
            location: 'California',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: reviewerImg2
        },
        {
            id: 3,
            name: 'Winson Herry',
            location: 'California',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: reviewerImg3
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <SectionText>Testimonial</SectionText>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 md:w-48' src={quoteImg} alt="" />
                </figure>
            </div>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewers.map(review => <Reviews
                        key={review.id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;