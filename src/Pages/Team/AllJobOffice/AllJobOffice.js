import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Office from '../Office/Office';

const AllJobOffice = () => {

    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, []);

    const handleCountry = city => {
        navigate(`/filterTeamMate/${city}`)
    }


    return (
        <div className='text-light'>
            <div className='py-5'>
                <Container>
                    <div className='big-font'>
                        <h1>WANNA JOIN </h1>
                        <h1> THE MAAT TEAM ?</h1>
                    </div>
                </Container>
            </div>
            <div className='py-5'>
                <Container>
                    <div className='py-5'>
                        <h1 className='pb-3'>Filter job offers by city :</h1>
                        <Button onClick={() => handleCountry('Chicago')} className='me-2 py-3 px-4' variant='outline-light'>CHICAGO</Button>
                        <Button onClick={() => handleCountry('Landon')} className='me-2 py-3 px-4' variant='outline-light'>LANDON</Button>
                        <Button onClick={() => handleCountry('Paris')} className='me-2 py-3 px-4' variant='outline-light'>PARIS</Button>
                        <Button onClick={() => handleCountry('New York')} className='me-2 py-3 px-4' variant='outline-light'>NEW YORK</Button>
                    </div>
                    {
                        teams.map(team => <Office key={team?._id} team={team}></Office>)
                    }
                </Container>

            </div>
        </div>
    );
};

export default AllJobOffice;