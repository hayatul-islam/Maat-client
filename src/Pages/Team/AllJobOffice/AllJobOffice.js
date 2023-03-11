import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ContactUs from "../../Shered/ContactUs/ContactUs";
import Footer from "../../Shered/Footer/Footer";
import Office from "../Office/Office";

const AllJobOffice = ({ teams }) => {
  // const { apiLink } = useMaat();
  // const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //     fetch(`${apiLink}/teams`)
  //         .then(res => res.json())
  //         .then(data => setTeams(data))
  // }, []);

  const handleCountry = (city) => {
    navigate(`/filterTeamMate/${city}`);
  };

  return (
    <div className="text-light">
      <div className="">
        <Container>
          <div className="banner-container py-3">
            <div className="big-font">
              <h1>WANNA JOIN</h1>
              <div className="storyInfo">
                <div>
                  <h1>THE MAAT</h1>
                </div>
                <div className="rightInfo">
                  <h1>TEAM ?</h1>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <a className="downBtn" href="#allJobOffers">
                <i className="fas fa-arrow-down"></i>
              </a>
            </div>
            <div className="bannerImg storyImg">
              <img src="https://i.ibb.co/fX1z144/story.jpg" alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div id="allJobOffers" className="mainSection">
        <Container>
          <div data-aos="fade-up" data-aos-duration="1000" className="py-5">
            <h1 className="pb-3">Filter job offers by city :</h1>
            <Button
              onClick={() => handleCountry("Chicago")}
              className="me-2 py-3 px-4 mb-3"
              variant="outline-light"
            >
              CHICAGO
            </Button>
            <Button
              onClick={() => handleCountry("Landon")}
              className="me-2 py-3 px-4 mb-3"
              variant="outline-light"
            >
              LANDON
            </Button>
            <Button
              onClick={() => handleCountry("Paris")}
              className="me-2 py-3 px-4 mb-3"
              variant="outline-light"
            >
              PARIS
            </Button>
            <Button
              onClick={() => handleCountry("New York")}
              className="me-2 py-3 px-4 mb-3"
              variant="outline-light"
            >
              NEW YORK
            </Button>
          </div>
          {teams.map((team) => (
            <Office key={team?._id} team={team}></Office>
          ))}
        </Container>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AllJobOffice;
