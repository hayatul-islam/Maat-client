import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './JobOffice.css';

const JoinUs = () => {

    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data.slice(0, 5)))
    }, []);

    const handleAllJobOffice = () => {
        navigate('/allJobOffice')
    }

    return (
        <div>
            <Container>
                <div className='joinUs-title py-5'>
                    <h1>WANNA JOIN US ?</h1>
                    <p>Check our latest job offers !</p>
                </div>
                {
                    teams.map(team => <Row key={team?._id}>

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
                    </Row>)
                }
                <Button onClick={handleAllJobOffice} variant="outline-light" className='fs-5'>SEE ALL THE TEAM</Button>
            </Container>

        </div>
    );
};

export default JoinUs;