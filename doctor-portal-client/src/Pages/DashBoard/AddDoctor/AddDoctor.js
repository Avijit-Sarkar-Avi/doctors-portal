import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate

    // console.log(imageHostKey)

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-delta.vercel.app/appoinmentSpecialty');
            const data = await res.json()
            return data;
        }
    })

    const handleAddDoctor = data => {

        const image = data.image[0];

        // console.log(data.image[0]);

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData)

                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    //save doctor information to the database

                    fetch('https://doctor-portal-server-delta.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })
                }

            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-2xl'>Add Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", { required: "Enter your Name" })}
                        type="name" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register('email', { required: 'Enter your Email' })}
                        type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select  {...register("specialty")}
                        className="select input-bordered w-full max-w-xs">
                        {
                            specialties?.map(specialty =>
                                <option key={specialty._id} value={specialty.name} >
                                    {specialty.name}
                                </option>
                            )
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register("image", { required: "Photo is required" })}
                        type="file" name='image' placeholder="Image" className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>

                <br />
                <input type="submit" value="Add A Doctor" className='btn btn-accent w-full max-w-xs text-white mb-3' />
            </form>
        </div>
    );
};

export default AddDoctor;