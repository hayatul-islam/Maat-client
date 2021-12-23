import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ExpertiseDetails.css';

const ExpertiseDetails = () => {

    const { expertiseId } = useParams();
    const [expertises, setExpertises] = useState([]);
    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/expertise')
            .then(res => res.json())
            .then(data => setExpertises(data))
    }, []);

    const findExpertise = expertises.find(expertise => expertise?._id === expertiseId)

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className='big-font expertiseInfo'>
                            <h1>{findExpertise?.title.toUpperCase()}</h1>
                            <p>{findExpertise?.description}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div>
                            <Image className='img-fluid expertiseImg' src={findExpertise?.image} />
                        </div>
                    </Col>
                </Row>
                <div className="py-5 mt-5">
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='big-font expertiseInfo'>
                                <h1>HOW CAN WE HELP YOU</h1>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='text-light expertiseInfo'>
                                <h1>{findExpertise?.sub_title}</h1>
                                <p>{findExpertise?.description}</p>
                                <Image className='w-100 mt-5' src={findExpertise?.image} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ExpertiseDetails;