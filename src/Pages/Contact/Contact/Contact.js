import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shered/Footer/Footer';
import './Contact.css';
import emailjs from 'emailjs-com';
import useMaat from '../../../Hooks/useMaat';

const Contact = () => {

    const { apiLink } = useMaat();
    const form = useRef();
    const [offices, setOffices] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`${apiLink}/offices`)
            .then(res => res.json())
            .then(data => setOffices(data))
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w7y4b1m', 'template_hx8r6uk', e.target, 'user_wCHYWdyeFu9Hugp30xAHD')
            .then((result) => {
                if (result.text) {
                    setMessage('Thank you! Your message has been sent!')
                }
            }, (error) => {
                console.log(error.text);
            });

        e.target = ''
    };

    console.log(message);

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

                            {
                                message !== '' ? <p>{message}</p> :
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <div className='inputField'>
                                                    <label htmlFor="">First Name</label> <br />
                                                    <input name="first_name" placeholder='Lucy' required />
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <div className='inputField'>
                                                    <label htmlFor="">Last Name</label> <br />
                                                    <input name="last_name" placeholder='Jefferrin' required />
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <div className='inputField'>
                                                    <label htmlFor="">E-mail adress</label> <br />
                                                    <input name="user_email" type="email" placeholder="example@gmail.com" required />
                                                </div>
                                            </Col>
                                            <div className="inputField">
                                                <label htmlFor="">Message</label> <br />
                                                <textarea name="message" id="" cols="30" rows="3" placeholder='Type your message here' required></textarea>
                                            </div>
                                            <div className='text-end'>
                                                <input className='submitBtn' type="submit" value="send" />
                                            </div>
                                        </Row>
                                    </form>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Contact;