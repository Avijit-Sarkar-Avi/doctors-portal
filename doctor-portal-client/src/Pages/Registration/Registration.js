import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../Hooks/UseToken';


const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUser, googleSignIn, githubSignIn } = useContext(AuthContext)

    const [signInError, setSignInError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = UseToken(createdUserEmail);

    const navigate = useNavigate();


    const location = useLocation();


    const form = location.state?.from?.pathname || '/';

    if (token) {
        navigate('/');
        // navigate(from, { replace: true });
    }


    const handleRegister = data => {
        setSignInError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully');
                // navigate(from, { replace: true });
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // navigate('/');
                        saveUser(data.name, data.email);
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => {
                console.log(error.message);
                setSignInError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctor-portal-server-delta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json)
            .then(data => {
                // getUserToken(email);
                setCreatedUserEmail(email);

            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Registration</h2>

                <form onSubmit={handleSubmit(handleRegister)}>

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
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: "Enter your Password",
                                minLength: { value: 6, message: "Password must be 6 character" },
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/,
                                    message: "password must be strong"
                                }
                            })}
                            type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>},

                    </div>
                    <br />
                    <input type="submit" value="REGISTRATION" className='btn btn-accent w-full max-w-xs text-white mb-3' />

                    {signInError && <p className='text-red-600'>{signInError}</p>}

                    <p>Have an account?
                        <Link to='/login' className='text-primary'>LogIn</Link> </p>

                    <div className="divider">OR</div>

                </form>

                <input onClick={handleGoogleSignIn}
                    type="submit" value="REGISTER WITH GOOGLE" className='btn btn-outline w-full max-w-xs mb-5' />

                <input onClick={handleGitHubSignIn}
                    type="submit" value="REGISTER WITH GitHub" className='btn btn-outline w-full max-w-xs' />
            </div>
        </div>
    );
};

export default Registration;