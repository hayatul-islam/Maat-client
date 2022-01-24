import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useMaat from '../../../Hooks/useMaat';
import './OurTeam.css';

const OurTeam = () => {

    const { apiLink } = useMaat();
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${apiLink}/teams`)
            .then(res => res.json())
            .then(data => setTeams(data.slice(0, 5)))
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

                                <div className='teamImg'>
                                    <div className='d-flex align-items-center'>
                                        {
                                            team?.image.slice(0, 4) === 'http' ?
                                                <img className='img-fluid' src={team?.image} alt="" /> :
                                                <img className='img-fluid' src={`${apiLink}/images/${team?.image}`} alt="" />
                                        }
                                        <div className='contactInfo'>
                                            <h6>{team?.name}</h6>
                                            <span>{team?.job}</span>
                                            <p>Email: {team?.email}</p>
                                            <a target="_blank" href={team?.linkedin}>Linkedin</a>
                                        </div>
                                    </div>
                                </div>

                            </Row>
                            <div className="">
                                <hr className='teamHr' />
                            </div>

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