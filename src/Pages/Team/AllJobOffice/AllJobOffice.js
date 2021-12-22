import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Office from '../Office/Office';

const AllJobOffice = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, []);


    return (
        <div>
            <div className='allTeamTitle py-5 text-light'>
                <Container>
                    <h1>WANNA JOIN </h1>
                    <h1> THE MAAT TEAM ?</h1>
                </Container>
            </div>
            <div className='py-5' style={{ background: '#f0f0f0' }}>
                <Container>
                    <div className='py-5'>
                        <h1>Filter job offers by city :</h1>
                        <Button className='me-2' variant='outline-dark'>CHICAGO</Button>
                        <Button className='me-2' variant='outline-dark'>LANDON</Button>
                        <Button className='me-2' variant='outline-dark'>PARIS</Button>
                        <Button className='me-2' variant='outline-dark'>NEW YORK</Button>
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