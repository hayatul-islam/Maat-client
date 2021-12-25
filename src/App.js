
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
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


function App() {
  return (
    <div style={{ background: '#212426' }}>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="expertises" element={<Expertises />} />
          <Route path="teams" element={<Team />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="allJobOffice" element={<AllJobOffice />} />
          <Route path="filterTeamMate/:city" element={<FilterTeamMate />} />
          <Route path="teamMemberInfo/:memberId" element={<TeamMemberInfo />} />
          <Route path="offersInfo/:offersId" element={<OffersInfo />} />
          <Route path="expertises/expertiseDetails/:expertiseId" element={<ExpertiseDetails />} />
          <Route path="expertiseDetails/:expertiseId" element={<ExpertiseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
