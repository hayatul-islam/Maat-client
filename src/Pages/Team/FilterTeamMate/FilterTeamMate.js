import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import SingleTeam from '../SingleTeam/SingleTeam';
import Office from '../Office/Office';
import './FilterTeamMate.css';

const FilterTeamMate = () => {

    const { city } = useParams();
    const [teams, setTeams] = useState([]);
    const [findTeam, setFindTeam] = useState('offers');

    useEffect(() => {
        fetch('http://localhost:4040/teams')
            .then(res => res.json())
            .then(data => {
                setTeams(data)
            })
    }, []);

    const filterTeam = teams.filter(team => team?.location === city);
    console.log(filterTeam);

    const handleOnClick = find => {
        if (find === 'team') {
            setFindTeam('team')
        } else if (find === 'offers') {
            setFindTeam('offers')
        }
    }

    return (
        <div>
            <Container>
                <div className='big-font filterTeamTitle'>
                    <div className='py-3 sticky-top'>
                        <Link className='backBtn ' to="/teams"><i className="fas fa-times"></i></Link>
                    </div>
                    <h1 className='pb-3'>{city.toUpperCase()}</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                <div className='py-5'>
                    <Button className='py-3 px-5 fs-5' onClick={() => handleOnClick('offers')} variant="outline-light">Job Offers</Button>
                    <Button className='py-3 px-5 fs-5' onClick={() => handleOnClick('team')} variant="outline-light">Team Members</Button>
                </div>
                <Row>

                    {
                        findTeam === 'team' ? filterTeam.map(team => <SingleTeam key={team?._id} team={team}></SingleTeam>) : ''
                    }

                    {
                        findTeam === 'offers' ? filterTeam.map(team => <Office key={team?._id} team={team}></Office>) : ''
                    }
                </Row>
            </Container>
        </div>
    );
};

export default FilterTeamMate;