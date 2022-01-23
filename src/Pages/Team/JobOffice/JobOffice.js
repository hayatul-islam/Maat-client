import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Office from '../Office/Office';
import useMaat from '../../../Hooks/useMaat';
import './JobOffice.css';

const JoinUs = () => {

    const { apiLink } = useMaat();
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${apiLink}/teams`)
            .then(res => res.json())
            .then(data => setTeams(data.slice(0, 5)))
    }, []);

    const handleAllJobOffice = () => {
        navigate('/allJobOffice')
    }

    return (
        <div className='mainSection text-light'>
            <Container>
                <div data-aos="fade-up" data-aos-duration="1000" className='joinUs-title pb-5'>
                    <h1>WANNA JOIN US ?</h1>
                    <p>Check our latest job offers !</p>
                </div>
                {
                    teams.map(team => <Office key={team?._id} team={team}></Office>)
                }
                <a onClick={handleAllJobOffice} className='linkBtn d-flex align-items-center' >SEE ALL THE TEAM <Image src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd70b77c241f_icon-arrow-white-diag.svg" /></a>
            </Container>

        </div>
    );
};

export default JoinUs;