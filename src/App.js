import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Favicon from "react-favicon";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import useMaat from "./Hooks/useMaat";
import BlogDetails from "./Pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Expertises from "./Pages/Expertises/Expertises/Expertises";
import ExpertiseDetails from "./Pages/Home/ExpertiseDetails/ExpertiseDetails";
import Home from "./Pages/Home/Home/Home";
import OurStory from "./Pages/Maat/OurStory/OurStory";
import Story from "./Pages/Maat/Story/Story";
import Header from "./Pages/Shered/Header/Header";
import Login from "./Pages/Shered/Login/Login";
import PrivateRoute from "./Pages/Shered/Login/PrivateRoute";
import AllJobOffice from "./Pages/Team/AllJobOffice/AllJobOffice";
import FilterTeamMate from "./Pages/Team/FilterTeamMate/FilterTeamMate";
import OffersInfo from "./Pages/Team/OffersInfo/OffersInfo";
import TeamMemberInfo from "./Pages/Team/TeamMemberInfo/TeamMemberInfo";
import Team from "./Pages/Team/Teams";
AOS.init();

function App() {
  // page loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const { blogs, teams, expertises } = useMaat();

  // route change scroll top
  const RouteScrollTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  };

  return (
    <div>
      <Favicon url="" />
      {loading ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="loadingPicture"></div>
        </div>
      ) : (
        <div className="rootFileAnimation" style={{ background: "#212426" }}>
          <BrowserRouter>
            <div className="bottomToTopBtn">
              <ScrollToTop smooth />
            </div>
            <Header />
            <RouteScrollTop>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/expertises" element={<Expertises />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ourStory" element={<OurStory />} />
                <Route path="/teams" element={<Team />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                  path="/blogs/:blogId"
                  element={<BlogDetails blogs={blogs} />}
                />
                <Route
                  path="/allJobOffice"
                  element={<AllJobOffice teams={teams} />}
                />
                <Route
                  path="/filterTeamMate/:city"
                  element={<FilterTeamMate teams={teams} />}
                />
                <Route
                  path="/teamMemberInfo/:memberId"
                  element={<TeamMemberInfo teams={teams} />}
                />
                <Route path="/offersInfo/:offersId" element={<OffersInfo />} />
                <Route
                  path="/expertises/expertiseDetails/:expertiseId"
                  element={<ExpertiseDetails expertises={expertises} />}
                />
                <Route
                  path="/expertiseDetails/:expertiseId"
                  element={<ExpertiseDetails expertises={expertises} />}
                />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                ></Route>
                <Route path="/story" element={<Story />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </RouteScrollTop>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
