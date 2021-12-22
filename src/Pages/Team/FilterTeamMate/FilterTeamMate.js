import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilterTeamMate = () => {

    const { city } = useParams();
    const [teams, setTeams] = useState([]);

    console.log(teams);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => {
                setTeams(data)
            })
    }, []);

    return (
        <div>
            <h1>filter: {city}</h1>
        </div>
    );
};

export default FilterTeamMate;