import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
        <div className='mainSection'>
            <Container>
                <div data-aos="fade-up" data-aos-duration="1000" className='big-font'>
                    <h1 className='ourTeamTitle'>OUR INTERNATIONAL TEAM</h1>
                </div>
                <div className='teamsContainer'>
                    {
                        teams.map(team => <div data-aos="fade-up" data-aos-duration="1000" key={team?._id}>
                            <Row className='teamContainer'>
                                <Col xs={12} lg={4}>
                                    <div className='text-light'>
                                        <h4>{team?.name}</h4>
                                    </div>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <div className='text-light'>
                                        <h5 className='fw-normal'>{team?.job}</h5>
                                    </div>
                                </Col>
                                <Col xs={12} lg={4}>
                                    {/* <div className='teamImg'>
                                        <img className='img-fluid' src={team?.image} alt="" />
                                    </div> */}
                                </Col>

                                <div className='teamImg'>
                                    <div className='d-flex align-items-center'>
                                        <img className='img-fluid' src={team?.image} alt="" />
                                        <p>{team?.about.slice(0, 100)}</p>
                                    </div>
                                </div>

                                <div className="pb-4">
                                    <hr className='teamHr' />
                                </div>
                            </Row>

                        </div>)
                    }
                </div>
                <a data-aos="fade-up" data-aos-duration="1000"
                    onClick={handleAllTeam} className='linkBtn' >SEE ALL THE TEAM <Image src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd70b77c241f_icon-arrow-white-diag.svg" /></a>

            </Container>
        </div>
    );
};

export default OurTeam;