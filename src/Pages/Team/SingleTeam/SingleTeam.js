import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleTeam = ({ team }) => {

    const navigate = useNavigate();
    const handleTeamMemberInfo = memberId => {
        navigate(`/teamMemberInfo/${memberId}`)
    }

    return (
        <Col xs={12} md={3}>
            <Card data-aos="fade-up" data-aos-duration="1000" onClick={() => handleTeamMemberInfo(team?._id)} className='mb-5 bg-dark text-light border-0'>
                {
                    team?.image.slice(0, 4) === 'http' ?
                        <Card.Img className='team-img img-fluid' variant="top" src={team?.image} />
                        :
                        <Card.Img className='team-img img-fluid' variant="top" src={`data:image/png;base64,${team?.image}`} />
                }

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