import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../Hooks/UseToken';

const Login = () => {

    const { signIn, googleSignIn, githubSignIn, facebookSignIn } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');

    const [token] = UseToken(loginUserEmail);

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                toast('User Login successfully');
                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            });
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleGitHubLogin = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console(user);
            })
            .catch(error => console.error(error))
    }

    const handleFacebookLogin = () => {
        facebookSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: "Enter your email" })}
                            type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",
                            {
                                required: "Enter Password please",
                                minLength: { value: 6, message: 'Password must be six digit' }
                            })}
                            type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <span className="label-text btn btn-link">Forget Password ?</span>
                    </div>
                    <br />
                    <input type="submit" value="LOGIN" className='btn btn-accent w-full max-w-xs text-white mb-3' />
                    {loginError && <p className='text-red-600'>{loginError}</p>}


                    <p>New to Doctors Portal?
                        <Link to='/regitration' className='text-primary'>Create New Account</Link> </p>

                    <div className="divider">OR</div>

                </form>

                <input onClick={handleGoogleLogin}
                    type="submit" value="CONTINUE WITH GOOGLE" className='btn btn-outline w-full max-w-xs mb-5' />

                <input onClick={handleGitHubLogin}
                    type="submit" value="CONTINUE WITH GitHub" className='btn btn-outline w-full max-w-xs mb-5' />

                <input onClick={handleFacebookLogin}
                    type="submit" value="CONTINUE WITH Facebook" className='btn btn-outline w-full max-w-xs mb-5' />
            </div>
        </div>
    );
};

export default Login;