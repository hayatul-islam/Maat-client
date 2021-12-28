import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Footer from '../../Shered/Footer/Footer';
import './Contact.css';

const Contact = () => {

    const [offices, setOffices] = useState([]);
    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/offices')
            .then(res => res.json())
            .then(data => setOffices(data))
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Container>
                <div data-aos="fade-up" data-aos-duration="1000" className="big-font py-4">
                    <h1>CONTACT US</h1>
                </div>
                <Row>
                    <Col xs={12} lg={6}>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="big-font py-4">
                                <h3>Or call us !</h3>
                            </div>
                            <div className="officeInfo">
                                {
                                    offices.map(office => <div key={office?._id} className='contactOffice'>
                                        <h5>{office?.name} office</h5>
                                        <p className='phone'>{office?.phone}</p>
                                    </div>)
                                }

                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div data-aos="fade-up" data-aos-duration="1000" className='contactForm mt-5'>
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
                                                {
                                                    offices.map(office => <option
                                                        key={office?._id}
                                                        value={office?.name}>
                                                        {office?.name}
                                                    </option>)
                                                }
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
            <Footer />
        </div>
    );
};

export default Contact;