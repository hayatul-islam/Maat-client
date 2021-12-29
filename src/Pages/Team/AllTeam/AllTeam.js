import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SingleTeam from '../SingleTeam/SingleTeam';
import './AllTeam.css';

const AllTeam = () => {

    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/teams')
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
            <div className=' pt-5 text-light'>
                <Container>
                    <div className="big-font">
                        <h1>DISCOVER THE</h1>
                        <h1 className='pt-3'>TALENTS BEHIND MAAT</h1>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="mainSection">
                    <div data-aos="fade-up" data-aos-duration="1000" className='py-5 text-light'>
                        <h1 className='pb-3'>Filter by city :</h1>
                        <Button onClick={() => handleCountry('Chicago')} className='me-2 py-3 px-4 mb-3' variant='outline-light'>CHICAGO</Button>
                        <Button onClick={() => handleCountry('Landon')} className='me-2 py-3 px-4 mb-3' variant='outline-light'>LANDON</Button>
                        <Button onClick={() => handleCountry('Paris')} className='me-2 py-3 px-4 mb-3' variant='outline-light'>PARIS</Button>
                        <Button onClick={() => handleCountry('New York')} className='me-2 py-3 px-4 mb-3' variant='outline-light'>NEW YORK</Button>
                    </div>
                    <Row>
                        {
                            teams.map(team => <SingleTeam key={team?._id} team={team}></SingleTeam>)
                        }

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AllTeam;