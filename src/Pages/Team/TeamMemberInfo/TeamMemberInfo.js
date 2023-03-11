import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Shered/Footer/Footer";
import "./TeamMemberInfo.css";

const TeamMemberInfo = ({ teams }) => {
  const { memberId } = useParams();

  //   const { apiLink } = useMaat();
  // const [teams, setTeams] = useState([]);
  // useEffect(() => {
  //     fetch(`${apiLink}/teams`)
  //         .then(res => res.json())
  //         .then(data => {
  //             setTeams(data)
  //         })
  // }, []);

  const findMember = teams?.find((member) => member?._id === memberId);
  console.log(findMember, teams);

  return (
    <>
      <div className="py-5 text-light">
        <Container>
          <div className="pb-3 sticky-top">
            <Link className="backBtn " to="/teams">
              <i className="fas fa-times"></i>
            </Link>
          </div>
          <Row>
            <div className="singleImage1">
              {findMember?.image.slice(0, 4) === "http" ? (
                <Image
                  className="img-fluid memberImg"
                  src={findMember?.image}
                />
              ) : (
                <Image
                  className="img-fluid memberImg"
                  src={`${findMember?.image}`}
                />
              )}
            </div>
            <Col xs={12} md={8}>
              <div>
                <div className="big-font member-info">
                  <p className="location">
                    {findMember?.location.toUpperCase()}
                  </p>
                  <h1 className="infoTitle">
                    {findMember?.name.toUpperCase()}
                  </h1>
                  <p className="job">{findMember?.job}</p>
                </div>
                <div className="py-5 socialLink">
                  <a target="_blank" href="#">
                    LINKEDIN
                  </a>
                  <a target="_blank" href="#">
                    FACEBOOK
                  </a>
                </div>
                <div className="py-5 bio">
                  <h1>Bio</h1>
                  <p>{findMember?.about}</p>
                </div>
              </div>
              <Row>
                <Col xs={12} sm={6}>
                  <div className="expertise">
                    <h1>Expertises</h1>
                    <p>Labor & Employment</p>
                    <p>Intellectual Property</p>
                    <p>Permitting and Compliance</p>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="expertise">
                    <h1>Spoken languages</h1>
                    <p>English</p>
                    <p>French</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <div className="singleImage2 sticky-top">
                {findMember?.image.slice(0, 4) === "http" ? (
                  <Image
                    className="img-fluid memberImg"
                    src={findMember?.image}
                  />
                ) : (
                  <Image
                    className="img-fluid memberImg"
                    src={`${findMember?.image}`}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default TeamMemberInfo;
