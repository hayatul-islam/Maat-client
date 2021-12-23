import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Office from '../Office/Office';
import './JobOffice.css';

const JoinUs = () => {

    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/teams')
            .then(res => res.json())
            .then(data => setTeams(data.slice(0, 5)))
    }, []);

    const handleAllJobOffice = () => {
        navigate('/allJobOffice')
    }

    return (
        <div className='pb-5 text-light'>
            <Container>
                <div className='joinUs-title py-5'>
                    <h1>WANNA JOIN US ?</h1>
                    <p>Check our latest job offers !</p>
                </div>
                {
                    teams.map(team => <Office key={team?._id} team={team}></Office>)
                }
                <Button onClick={handleAllJobOffice} variant="outline-light" className='fs-5'>SEE ALL THE TEAM</Button>
            </Container>

        </div>
    );
};

export default JoinUs;