import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ContactUs from "../../Shered/ContactUs/ContactUs";
import Footer from "../../Shered/Footer/Footer";
import "./ExpertiseDetails.css";

const ExpertiseDetails = ({ expertises }) => {
  // const { apiLink } = useMaat();
  const { expertiseId } = useParams();
  const findExpertise = expertises.find(
    (expertise) => expertise?._id === expertiseId
  );

  return (
    <div className="pb-5">
      <Container>
        <div className="pb-3 sticky-top">
          <Link className="backBtn " to="/expertises">
            <i className="fas fa-times"></i>
          </Link>
        </div>
        <Row>
          <Col xs={12} md={12}>
            <div className="big-font expertiseInfo">
              <h1>{findExpertise?.title.toUpperCase()}</h1>
              <p>{findExpertise?.description}</p>
            </div>
          </Col>
          <Col xs={12} md={12}>
            <div>
              {/* <Image className='img-fluid expertiseImg' src={findExpertise?.image} /> */}
            </div>
          </Col>
          <div className="py-5">
            <a href="#expertise">
              <Image
                className="downLinkImage"
                src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd9df77c2423_icon-arrow-white.svg"
              />
            </a>
          </div>
        </Row>
        <div id="expertise" className="mainSection">
          <Row>
            <Col xs={12} md={6}>
              <div className="big-font expertiseInfo">
                <h1>HOW CAN WE HELP YOU</h1>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="text-light big-font expertiseInfo">
                <h2>{findExpertise?.sub_title}</h2>
                <p>{findExpertise?.description}</p>
                {findExpertise?.service.map((item) => (
                  <li>{item}</li>
                ))}
                <Image className="w-100 mt-5" src={findExpertise?.image} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default ExpertiseDetails;
