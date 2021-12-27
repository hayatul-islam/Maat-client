import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurExpertise.css';
import { useNavigate } from 'react-router-dom';

const OurExpertise = () => {

    const [expertises, setExpertises] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/expertise')
            .then(res => res.json())
            .then(data => setExpertises(data))
    }, []);

    const handleExpertiseDetails = expertiseId => {
        navigate(`expertiseDetails/${expertiseId}`)
    }

    return (
        <div>
            <Container>
                <div className='big-font pb-5'>
                    <h1>OUR</h1>
                    <h1>EXPERTISES</h1>
                </div>
                <Row>
                    {
                        expertises.map((expertise, index) => <Col
                            key={expertise?._id}
                            xs={12} lg={6}
                        >
                            <div className='expertise-card'>
                                <h1 className='text-end text-muted fw-normal cardIndex'>0{index + 1}</h1>
                                <h1>{expertise?.title}</h1>
                                <p>{expertise?.description}</p>
                                <button onClick={() => handleExpertiseDetails(expertise?._id)} className="fs-5 border-0 bg-light px-3 py-2 rounded mt-4">SEE MORE</button>
                            </div>

                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default OurExpertise;