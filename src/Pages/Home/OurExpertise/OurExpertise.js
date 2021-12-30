import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
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
        <div className='mainSection'>
            <Container>
                <div data-aos="fade-up" data-aos-duration="1000" className='big-font pb-5'>
                    <h1>OUR</h1>
                    <h1>EXPERTISES</h1>
                </div>
                <Row>
                    {
                        expertises.map((expertise, index) => <Col
                            key={expertise?._id}
                            xs={12} lg={6}
                        >
                            <div data-aos="fade-up" data-aos-duration="1000" id={`cardIndex${index + 1}`} className='expertise-card'>
                                {
                                    index + 1 <= 9 ? <h1 className='text-end text-muted fw-normal cardIndex'>0{index + 1}</h1> : <h1 className='text-end text-muted fw-normal cardIndex'>{index + 1}</h1>
                                }
                                <h1>{expertise?.title}</h1>
                                <p>{expertise?.description}</p>
                                <div className="pt-5 my-4">
                                    <a onClick={() => handleExpertiseDetails(expertise?._id)} className='linkBtn text-dark' >SEE MORE <Image src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd15737c241e_icon-arrow-black-diag.svg" /></a>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurExpertise;