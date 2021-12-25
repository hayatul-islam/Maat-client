import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './OurTeam.css';

const OurTeam = () => {

    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/teams')
            .then(res => res.json())
            .then(data => setTeams(data.slice(0, 6)))
    }, []);

    const handleAllTeam = () => {
        navigate('/teams')
    }

    return (
        <div className='py-5 mt-5'>
            <Container>
                <div className='team-title text-light pb-5 mb-4'>
                    <h1>OUR</h1>
                    <h1>INTERNATIONAL TEAM</h1>
                </div>
                {
                    teams.map(team => <div key={team?._id}>
                        <Row className='teamContainer'>
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
                                <div className='teamImg'>
                                    <img className='img-fluid' src={team?.image} alt="" />
                                </div>
                            </Col>
                            <div className="pb-4">
                                <hr className='bg-white' />
                            </div>
                        </Row>

                    </div>)
                }
                <Button onClick={handleAllTeam} variant="outline-light" className='fs-5'>SEE ALL THE TEAM</Button>
                {/* <Link className='allTeamBtn' to="/teams">SEE ALL THE TEAM</Link> */}

            </Container>
        </div>
    );
};

export default OurTeam;