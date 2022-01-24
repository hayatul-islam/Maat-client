import React, { useState } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import axios from 'axios';
import useMaat from '../../../Hooks/useMaat';

const Login = () => {

    const { apiLink } = useMaat();
    const [isRegister, setIsRegister] = useState(true);
    const { googleSignIn, handleUserLogin, error, handleUserRegister } = useFirebase();
    const location = useLocation()
    const redirect_url = location?.state?.from || '/';
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    // google sign in
    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                navigate(redirect_url)
            })
            .finally(() => {
            })
    }

    // user login with email password
    const handleLogin = (data) => {
        handleUserLogin(data.email, data.password, location, navigate)

    };

    // user register with email password
    const handleRegister = data => {
        const newUser = { email: data.email, name: data.name, role: 'user' }
        if (data?.password === data?.rePassword) {
            handleUserRegister(data.email, data.password, data.name, location, navigate)
            axios.post(`${apiLink}/users`, newUser)
        }
    };


    return (
        <div className='pt-5'>
            <Container>
                <div className='handlerBtn d-flex justify-content-end'>
                    {
                        isRegister ?
                            <h5 onClick={() => setIsRegister(false)}>Register</h5> :
                            <h5 onClick={() => setIsRegister(true)}>Login</h5>
                    }
                </div>

                {
                    isRegister ?
                        <div className="userForm shadow">
                            <div className="text-center pb-5 userLogin">
                                <h1>Login</h1>
                            </div>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <input className="form-control" type="email" {...register("email")} placeholder="Email address" /> <br />
                                <input className="form-control" type="password" {...register("password")} placeholder="Password" /> <br />
                                <input className="btn loginBtn btn-lg px-5 rounded-pill form-control" type="submit" value="Login" />
                            </form>
                            {/* <div className='pt-4 text-light d-flex align-items-center justify-content-center'>
                                <span className='fs-5'>Or <i className="fas fa-angle-double-right me-2"></i></span>
                                <button onClick={handleGoogle} className="btn btn-outline-light fs-5 googleBtn"><i className="fab fa-google"></i></button>
                            </div> */}
                            <p className="text-center pt-3 text-danger">{error}</p>
                        </div> :

                        <div className="userForm shadow">
                            <div className="text-center pb-5 pt-3">
                                <h1 className="text-uppercase fw-normal">Register</h1>
                            </div>
                            <form onSubmit={handleSubmit(handleRegister)}>
                                <input
                                    className="form-control  input-field"
                                    name="name"
                                    type="text" {...register("name")}
                                    placeholder="Name" /> <br />
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email" {...register("email")}
                                    placeholder="Email address" /> <br />
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password" {...register("password")}
                                    placeholder="Password" /> <br />
                                <input
                                    className="form-control"
                                    name="rePassword"
                                    type="password" {...register("rePassword")}
                                    placeholder="Re-Password" /> <br />
                                <input
                                    className="btn loginBtn btn-lg px-5 rounded-pill form-control"
                                    type="submit"
                                    value="Register" />
                            </form>
                            <p className="text-center pt-3 text-danger">{error}</p>
                        </div>
                }

            </Container>
            <Footer />
        </div>
    );
};

export default Login;