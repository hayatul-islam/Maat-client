import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddExpertise from '../AddExpertise/AddExpertise';

const Dashboard = () => {

    const [addItems, setAddItems] = useState([]);
    const [selectItems, setSelectItems] = useState('');

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
                                <h4 onClick={() => handleSelectItem('team')}>Add Team member</h4>
                                <h4 onClick={() => handleSelectItem('expertise')}>Add Expertise</h4>
                                <h4 onClick={() => handleSelectItem('story')}>Add Story</h4>
                                <h4 onClick={() => handleSelectItem('blog')}>Add Blog</h4>
                                <h4 onClick={() => handleSelectItem('figure')}>Add Figures</h4>
                                <h4 onClick={() => handleSelectItem('office')}>Add Office</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={9}>
                            <div>
                                {
                                    selectItems === 'expertise' ? <AddExpertise /> : ''
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