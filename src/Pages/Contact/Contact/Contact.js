import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Container>
                <div className="big-font py-4">
                    <h1>CONTACT US</h1>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <div>
                            <div className="big-font py-4">
                                <h3>Or call us !</h3>
                            </div>
                            <div className="officeInfo">
                                <div className='contactOffice'>
                                    <h5>Chicago office</h5>
                                    <p>217-300-0438</p>
                                </div>
                                <div className='contactOffice'>
                                    <h5>Chicago office</h5>
                                    <p>217-300-0438</p>
                                </div>
                                <div className='contactOffice'>
                                    <h5>Chicago office</h5>
                                    <p>217-300-0438</p>
                                </div>
                                <div className='contactOffice'>
                                    <h5>Chicago office</h5>
                                    <p>217-300-0438</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='contactForm'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <div className='inputField'>
                                            <label htmlFor="">First Name</label> <br />
                                            <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='Lucy' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='inputField'>
                                            <label htmlFor="">Last Name</label> <br />
                                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder='Jefferrin' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='inputField'>
                                            <label htmlFor="">E-mail adress</label> <br />
                                            <input {...register("email")} type="email" placeholder="example@gmail.com" />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='inputField'>
                                            <label htmlFor="">City</label> <br />
                                            <select {...register("city")}>
                                                <option value="Paris">Paris</option>
                                                <option value="New York">New York</option>
                                                <option value="Chicago">Chicago</option>
                                                <option value="Landon">Landon</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <div className="inputField">
                                        <label htmlFor="">Message</label> <br />
                                        <textarea {...register("message")} name="" id="" cols="30" rows="3" placeholder='Type your message here'></textarea>
                                    </div>
                                    <input className='submitBtn' type="submit" value="send" />
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;