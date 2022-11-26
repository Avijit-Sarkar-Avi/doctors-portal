import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import SectionText from '../../../Components/SectionText/SectionText';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AppoinmentBody = ({ selectedDate }) => {
    // const [appoinmentOptions, setAppoinmentOptions] = useState([]);

    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');

    // const { data: appoinmentOptions = [] } = useQuery({
    //     queryKey: ['appoinmentOption'],
    //     queryFn: () => fetch('https://doctor-portal-server-delta.vercel.app/appoinmentOption')
    //         .then(res => res.json())
    // })

    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appoinmentOption', date],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-delta.vercel.app/v2/appoinmentOption?date=${date}`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('https://doctor-portal-server-delta.vercel.app/appoinmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOptions(data))
    // }, [])

    return (
        <section>
            <div className='text-center'>
                <SectionText>
                    Available Appoinment {format(selectedDate, 'PP')}
                </SectionText>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinmentOptions.map(appionments =>
                        <AppoinmentOption
                            key={appionments._id}
                            appionments={appionments}
                            setTreatment={setTreatment}
                        ></AppoinmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AppoinmentBody;