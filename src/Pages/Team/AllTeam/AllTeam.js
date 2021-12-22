import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AllTeam.css';

const AllTeam = () => {

    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => {
                setTeams(data)
            })
    }, []);

    const handleCountry = city => {
        navigate(`/filterTeamMate/${city}`)
    }

    return (
        <div>
            <div className='allTeamTitle py-5 text-light'>
                <Container>
                    <h1>DISCOVER THE</h1>
                    <h1>TALENTS BEHIND MAAT</h1>
                </Container>
            </div>
            <Container>
                <div className="pt-5">
                    <div className='py-5'>
                        <h1>Filter by city :</h1>
                        <Button onClick={() => handleCountry('Chicago')} className='me-2' variant='outline-dark'>CHICAGO</Button>
                        <Button onClick={() => handleCountry('Landon')} className='me-2' variant='outline-dark'>LANDON</Button>
                        <Button onClick={() => handleCountry('Paris')} className='me-2' variant='outline-dark'>PARIS</Button>
                        <Button onClick={() => handleCountry('New York')} className='me-2' variant='outline-dark'>NEW YORK</Button>
                    </div>
                    <Row>
                        {
                            teams.map(team => <Col
                                key={team?._id}
                                xs={12} md={3}>
                                <Card className='mb-5'>
                                    <Card.Img className='team-img img-fluid' variant="top" src={team?.image} />
                                    <Card.Body>
                                        <span>{team?.location}</span>
                                        <Card.Title>{team?.name}</Card.Title>
                                        <Card.Text>
                                            <h5 className='fw-normal'>{team?.job}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AllTeam;