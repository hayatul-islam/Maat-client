import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OurTeam.css';

const OurTeam = () => {

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data.slice(0, 6)))
    }, [])

    return (
        <div className='py-5 mt-5'>
            <Container>
                <div className='team-title text-light pb-5 mb-4'>
                    <h1>OUR INTERNATIONAL TEAM</h1>
                </div>
                {
                    teams.map(team => <Row key={team?._id}>

                        <Col xs={12} md={4}>
                            <div className='text-light'>
                                <h4>{team?.name}</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className='text-light'>
                                <h5 className='fw-normal'>{team?.job}</h5>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                        <div className="pb-4">
                            <hr className='bg-white' />
                        </div>
                    </Row>)
                }
                <Button variant="outline-light" className='fs-5'>SEE ALL THE TEAM</Button>

            </Container>
        </div>
    );
};

export default OurTeam;