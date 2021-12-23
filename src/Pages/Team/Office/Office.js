import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Office = ({ team }) => {
    return (
        <div className='text-light'>
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
                    <hr className='' />
                </div>
            </Row>
        </div>
    );
};

export default Office;