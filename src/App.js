
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Team from './Pages/Team/Teams';
import Header from './Pages/Shered/Header/Header';
import AllJobOffice from './Pages/Team/AllJobOffice/AllJobOffice';
import FilterTeamMate from './Pages/Team/FilterTeamMate/FilterTeamMate';
import TeamMemberInfo from './Pages/Team/TeamMemberInfo/TeamMemberInfo';
import OffersInfo from './Pages/Team/OffersInfo/OffersInfo';
import ExpertiseDetails from './Pages/Home/ExpertiseDetails/ExpertiseDetails';
import Expertises from './Pages/Expertises/Expertises/Expertises';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import BlogDetails from './Pages/Blogs/BlogDetails/BlogDetails';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Contact from './Pages/Contact/Contact/Contact';
import OurStory from './Pages/Maat/OurStory/OurStory';
import TopBanner from './Pages/Home/TopBanner/TopBanner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Story from './Pages/Maat/Story/Story';
AOS.init();



function App() {

  // page loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  // route change scroll top
  const RouteScrollTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
  };

  return (
    <div>
      {
        loading ?
          <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
            <div className='loadingPicture'>

            </div>
          </div>
          :
          <div className='rootFileAnimation' style={{ background: '#212426' }}>
            <BrowserRouter>
              <div className='bottomToTopBtn'>
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
                  <Route path="/blogs/:blogId" element={<BlogDetails />} />
                  <Route path="/allJobOffice" element={<AllJobOffice />} />
                  <Route path="/filterTeamMate/:city" element={<FilterTeamMate />} />
                  <Route path="/teamMemberInfo/:memberId" element={<TeamMemberInfo />} />
                  <Route path="/offersInfo/:offersId" element={<OffersInfo />} />
                  <Route path="/expertises/expertiseDetails/:expertiseId" element={<ExpertiseDetails />} />
                  <Route path="/expertiseDetails/:expertiseId" element={<ExpertiseDetails />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="story" element={<Story />} />
                </Routes>
              </RouteScrollTop>
            </BrowserRouter>
          </div>
      }
    </div>
  );
}

export default App;
