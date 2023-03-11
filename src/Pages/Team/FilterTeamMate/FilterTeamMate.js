import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ContactUs from "../../Shered/ContactUs/ContactUs";
import Footer from "../../Shered/Footer/Footer";
import Office from "../Office/Office";
import SingleTeam from "../SingleTeam/SingleTeam";
import "./FilterTeamMate.css";

const FilterTeamMate = ({ teams }) => {
  //   const { teams } = useMaat();
  const { city } = useParams();
  const [findTeam, setFindTeam] = useState("offers");
  const filterTeam = teams?.filter((team) => team?.location === city);

  const handleOnClick = (find) => {
    if (find === "team") {
      setFindTeam("team");
    } else if (find === "offers") {
      setFindTeam("offers");
    }
  };

  return (
    <div>
      <Container>
        <div className="big-font filterTeamTitle">
          <div className="py-3 sticky-top">
            <Link className="backBtn " to="/teams">
              <i className="fas fa-times"></i>
            </Link>
          </div>
          <h1 className="pb-3">{city.toUpperCase()}</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </div>

        <div className="py-5">
          <Button
            className="py-3 px-5 fs-5 mb-3"
            onClick={() => handleOnClick("offers")}
            variant="outline-light"
          >
            Job Offers
          </Button>
          <Button
            className="py-3 px-5 fs-5 mb-3"
            onClick={() => handleOnClick("team")}
            variant="outline-light"
          >
            Team Members
          </Button>
        </div>
        <div className="pb-5">
          <Row>
            {findTeam === "team"
              ? filterTeam.map((team) => (
                  <SingleTeam key={team?._id} team={team}></SingleTeam>
                ))
              : ""}

            {findTeam === "offers"
              ? filterTeam.map((team) => (
                  <Office key={team?._id} team={team}></Office>
                ))
              : ""}
          </Row>
        </div>
      </Container>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default FilterTeamMate;
