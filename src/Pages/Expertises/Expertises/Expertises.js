import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ContactUs from '../../Shered/ContactUs/ContactUs';
import Footer from '../../Shered/Footer/Footer';
import './Expertises.css';

const Expertises = () => {

    const [expertises, setExpertises] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/expertise')
            .then(res => res.json())
            .then(data => setExpertises(data))
    }, []);

    const handleExpertiseDetails = expertiseId => {
        console.log(expertiseId);
        navigate(`expertiseDetails/${expertiseId}`)
    }

    return (
        <div className='banner-container pt-5'>
            <Container>
                <div>
                    <div className='big-font'>
                        <h1>EXPERTISES &</h1>
                        <h1 className='text-end'>SERVICES</h1>
                        <h1>WE MASTER</h1>
                    </div>
                    <div className="py-5">
                        <a className='downBtn downLinkBtn' href="#expertise"><i className="fas fa-arrow-down"></i></a>
                    </div>
                </div>
                <div id='expertise' className='mainSection'>
                    {
                        expertises?.map(expertise => <div
                            className='py-5'
                            key={expertise?._id}>
                            <Row data-aos="fade-up" data-aos-duration="1000" className='expertises'>
                                <Col xs={12} lg={6}>
                                    <div className='big-font expertise-title'>
                                        <h2 className='expTitle'>{expertise?.title}</h2>
                                        <img className='expertiseImg' src={expertise?.image} alt="" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <div>
                                        <p>{expertise?.description}</p>
                                    </div>
                                </Col>
                                <Col xs={12} lg={2}>
                                    <div className="d-flex justify-content-end">
                                        <div onClick={() => handleExpertiseDetails(expertise?._id)} className="expertiseBtn">
                                            <a className='downBtn'><i className="fas fa-location-arrow"></i></a>
                                        </div>
                                    </div>
                                </Col>
                                <div className="mt-5">
                                    <hr data-aos="fade-right" data-aos-duration="1000" className='bg-white' />
                                </div>
                            </Row>

                        </div>
                        )
                    }
                </div>
            </Container>
            <div className='bannerImg'>
                <img src="https://i.ibb.co/fnp0FXw/6160407763f5cdc1447c2427-img-services.jpg" alt="" />
            </div>

            <ContactUs />
            <Footer />
        </div>
    );
};

export default Expertises;