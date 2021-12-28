import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ContactUs from '../../Shered/ContactUs/ContactUs';
import Footer from '../../Shered/Footer/Footer';
import './OfferInfo.css';

const OffersInfo = () => {

    const { offersId } = useParams();
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/teams')
            .then(res => res.json())
            .then(data => {
                setTeams(data)
            })
    }, []);

    const findMember = teams?.find(member => member?._id === offersId);


    return (
        <div className='pt-5 text-light'>
            <Container>
                <Row>
                    <Col xs={12} md={7}>
                        <div>
                            <div className='big-font member-info'>
                                <p className='location'>{findMember?.published}</p>
                                <h1>{findMember?.job.toUpperCase()}</h1>
                                <p className='job'>{findMember?.location}- {findMember?.job_status}</p>
                            </div>
                            <div className='py-5 mt-5 bio'>
                                <h1>Who are we ?</h1>
                                <p>{findMember?.about}</p>
                            </div>
                            <div className='py-5 bio'>
                                <h1>Missions</h1>
                                <p>{findMember?.mission}</p>
                                <ul className='textInfo'>
                                    <li>Lorem ispum sim dolor amet</li>
                                    <li>Lorem ispum sim dolor amet nec consegir aliqua dolor do amet</li>
                                    <li>Lorem ispum sim dolor amet nec consegir aliqua</li>
                                    <li>Lorem ispum sim dolor amet nec</li>
                                </ul>
                            </div>
                            <div className='py-5 bio'>
                                <h1>Requirements</h1>
                                <p>{findMember?.requirements}</p>
                                <ul className='textInfo'>
                                    <li>Lorem ispum sim dolor amet</li>
                                    <li>Lorem ispum sim dolor amet nec consegir aliqua dolor do amet</li>
                                    <li>Lorem ispum sim dolor amet nec consegir aliqua</li>
                                    <li>Lorem ispum sim dolor amet nec</li>
                                </ul>
                            </div>
                            <div className='py-5 bio'>
                                <h1>Perks & benefits</h1>
                                <p>{findMember?.benefit}</p>
                                <ul className='textInfo'>
                                    <li>Lorem ispum sim dolor amet</li>
                                    <li>Lorem ispum sim dolor amet nec consegir aliqua dolor do amet</li>
                                    <li>Lorem ispum sim dolor amet nec consegir aliqua</li>
                                    <li>Lorem ispum sim dolor amet nec</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <div className='bg-light px-5 py-5 apply'>
                            <h1 className='mb-4'>Apply now !</h1>
                            <p className=''>{findMember?.mission}</p>
                            <div className='pt-4'>
                                <p>Put in the mail object :</p>
                                <p>{findMember?.job} -{findMember?.location}</p>
                            </div>
                            <div className='pb-4 pt-5'>
                                <Link className='applyBtn' to="#">APPLY</Link>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

            <ContactUs />
            <Footer />
        </div>
    );
};

export default OffersInfo;