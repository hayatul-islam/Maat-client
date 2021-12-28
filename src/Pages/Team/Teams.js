import React from 'react';
import ContactUs from '../Shered/ContactUs/ContactUs';
import Footer from '../Shered/Footer/Footer';
import AllTeam from './AllTeam/AllTeam';
import JobOffice from './JobOffice/JobOffice';

const Team = () => {
    return (
        <div>
            <AllTeam />
            <JobOffice />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Team;