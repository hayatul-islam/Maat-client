import React from 'react';
import AllTeam from './AllTeam/AllTeam';
import JobOffice from './JobOffice/JobOffice';

const Team = () => {
    return (
        <div style={{ background: '#f0f0f0' }}>
            <AllTeam />
            <JobOffice />
        </div>
    );
};

export default Team;