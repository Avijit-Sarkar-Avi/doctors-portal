import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment; //treatment is appoinmentOptions
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
            price
        }
        console.log(booking);

        fetch('https://doctor-portal-server-delta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }




    return (
        <section>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />

                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots?.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Full Name"
                            defaultValue={user?.displayName} readOnly
                            className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email"
                            defaultValue={user?.email} disabled
                            className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn w-full' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;