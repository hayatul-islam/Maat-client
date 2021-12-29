import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddBlog from '../AddBlog/AddBlog';
import AddExpertise from '../AddExpertise/AddExpertise';
import AddFigures from '../AddFigures/AddFigures';
import AddStory from '../AddStory/AddStory';
import AddOffice from '../AddOffice/AddOffice';
import AddTeam from '../AddTeam/AddTeam';

const Dashboard = () => {

    const [selectItems, setSelectItems] = useState('team');

    const handleSelectItem = item => {
        setSelectItems(item)
    }

    return (
        <div>
            <Container>
                <div className='big-font text-center'>
                    <h1>Welcome To Dashboard</h1>
                </div>
                <div className="mainSection">
                    <Row>
                        <Col xs={12} md={3}>
                            <div>
                                <h5 onClick={() => handleSelectItem('team')}>Add Team member</h5>
                                <h5 onClick={() => handleSelectItem('expertise')}>Add Expertise</h5>
                                <h5 onClick={() => handleSelectItem('story')}>Add Story</h5>
                                <h5 onClick={() => handleSelectItem('blog')}>Add Blog</h5>
                                <h5 onClick={() => handleSelectItem('figure')}>Add Figures</h5>
                                <h5 onClick={() => handleSelectItem('office')}>Add Office</h5>
                            </div>
                        </Col>
                        <Col xs={12} md={9}>
                            <div>
                                {
                                    selectItems === 'team' ? <AddTeam /> : ''
                                }
                                {
                                    selectItems === 'expertise' ? <AddExpertise /> : ''
                                }
                                {
                                    selectItems === 'blog' ? <AddBlog /> : ''
                                }
                                {
                                    selectItems === 'story' ? <AddStory /> : ''
                                }
                                {
                                    selectItems === 'figure' ? <AddFigures /> : ''
                                }
                                {
                                    selectItems === 'office' ? <AddOffice /> : ''
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;