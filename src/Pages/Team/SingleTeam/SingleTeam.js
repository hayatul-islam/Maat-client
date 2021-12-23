import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleTeam = ({ team }) => {
    return (
        <Col xs={12} md={3}>
            <Card className='mb-5 bg-dark text-light border-0'>
                <Card.Img className='team-img img-fluid' variant="top" src={team?.image} />
                <Card.Body>
                    <span>{team?.location}</span>
                    <Card.Title>{team?.name}</Card.Title>
                    <Card.Text>
                        <h5 className='fw-normal'>{team?.job}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleTeam;