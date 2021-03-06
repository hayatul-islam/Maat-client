import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Office = ({ team }) => {

    const navigate = useNavigate();
    const handleOffersInfo = offersId => {
        navigate(`/offersInfo/${offersId}`)
    }


    return (
        <div data-aos="fade-up" data-aos-duration="1000" onClick={() => handleOffersInfo(team?._id)} className='text-light'>
            <Row>
                <Col xs={12} md={4}>
                    <div className=''>
                        <h4>{team?.job}</h4>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className=''>
                        <h5 className='fw-normal'>{team?.location}</h5>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className=''>
                        <h5 className='fw-normal'>{team?.job_status}</h5>
                    </div>
                </Col>
                <div className="pb-4">
                    <hr data-aos="fade-right" data-aos-duration="1000" className='bg-white' />
                </div>
            </Row>
        </div>
    );
};

export default Office;