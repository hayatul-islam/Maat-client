import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
        <div className='banner-container py-5 text-light'>
            <Container>
                <div>
                    <div className='big-font'>
                        <h1>EXPERTISES &</h1>
                        <h1 className='text-end'>SERVICES</h1>
                        <h1>WE MASTER</h1>
                    </div>
                    <div className="py-5">
                        <a className='downBtn' href="#expertise"><i className="fas fa-arrow-down"></i></a>
                    </div>
                </div>
                <div id='expertise' className='mt-5'>
                    {
                        expertises?.map(expertise => <div
                            className='pt-5 pb-4'
                            key={expertise?._id}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className='big-font'>
                                        <h2>{expertise?.title}</h2>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div>
                                        <p>{expertise?.description}</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={2}>
                                    <div onClick={() => handleExpertiseDetails(expertise?._id)} className="d-flex justify-content-end">
                                        <a className='downBtn'><i className="fas fa-location-arrow"></i></a>
                                    </div>
                                </Col>
                                <div className="pt-4">
                                    <hr />
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
        </div>
    );
};

export default Expertises;