import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddBlog from '../AddBlog/AddBlog';
import AddStory from '../AddStory/AddStory';
import AddOffice from '../AddOffice/AddOffice';
import AddTeam from '../AddTeam/AddTeam';
import useFirebase from '../../../Hooks/useFirebase';
import useMaat from '../../../Hooks/useMaat';

const Dashboard = () => {

    const { user } = useFirebase();
    const { users } = useMaat();
    const [selectItems, setSelectItems] = useState('team');
    const handleSelectItem = item => {
        setSelectItems(item)
    }

    const isAdmin = users?.find(e => e?.email === user?.email);

    return (
        <div className='pb-5'>
            <Container>
                <div className='big-font text-center'>
                    <h1>Welcome To Dashboard</h1>
                </div>
                {
                    isAdmin?.role === 'admin' ?

                        <div className="mainSection">
                            <Row>
                                <Col xs={12} md={3}>
                                    <div>
                                        <h5 onClick={() => handleSelectItem('team')}>Add Team member</h5>
                                        <h5 onClick={() => handleSelectItem('story')}>Add Story</h5>
                                        <h5 onClick={() => handleSelectItem('blog')}>Add Blog</h5>
                                        <h5 onClick={() => handleSelectItem('office')}>Add Office</h5>
                                    </div>
                                </Col>
                                <Col xs={12} md={9}>
                                    <div>
                                        {
                                            selectItems === 'team' ? <AddTeam /> : ''
                                        }
                                        {
                                            selectItems === 'blog' ? <AddBlog /> : ''
                                        }
                                        {
                                            selectItems === 'story' ? <AddStory /> : ''
                                        }

                                        {
                                            selectItems === 'office' ? <AddOffice /> : ''
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </div> : ''
                }
            </Container>
        </div>
    );
};

export default Dashboard;