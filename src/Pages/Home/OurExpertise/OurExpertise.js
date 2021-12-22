import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurExpertise.css';

const OurExpertise = () => {

    const [expertises, setExpertises] = useState([]);
    useEffect(() => {
        fetch('expertise.json')
            .then(res => res.json())
            .then(data => setExpertises(data))
    }, [])

    return (
        <div>
            <Container>
                <div className='big-font expertise-title pb-5'>
                    <h1>OUR</h1>
                    <h1>EXPERTISES</h1>
                </div>
                <Row>
                    {
                        expertises.map((expertise, index) => <Col
                            key={expertise?._id}
                            xs={12} md={6}
                        >
                            <div className='expertise-card'>
                                <h1 className='text-end text-muted fw-normal'>0{index + 1}</h1>
                                <h1>{expertise?.title}</h1>
                                <p>{expertise?.description}</p>
                                <button className="fs-5 border-0 bg-light px-3 py-2 rounded mt-4">SEE MORE</button>
                            </div>

                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default OurExpertise;