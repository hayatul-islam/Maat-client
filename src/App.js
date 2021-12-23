import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Team from './Pages/Team/Teams';
import Header from './Pages/Shered/Header/Header';
import AllJobOffice from './Pages/Team/AllJobOffice/AllJobOffice';
import FilterTeamMate from './Pages/Team/FilterTeamMate/FilterTeamMate';
import AllTeam from './Pages/Team/AllTeam/AllTeam';
import TeamMemberInfo from './Pages/Team/TeamMemberInfo/TeamMemberInfo';
import OffersInfo from './Pages/Team/OffersInfo/OffersInfo';
import ExpertiseDetails from './Pages/Home/ExpertiseDetails/ExpertiseDetails';


function App() {
  return (
    <div style={{ background: '#212426' }}>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teams" element={<Team />} />
          <Route path="allJobOffice" element={<AllJobOffice />} />
          <Route path="filterTeamMate/:city" element={<FilterTeamMate />} />
          <Route path="teamMemberInfo/:memberId" element={<TeamMemberInfo />} />
          <Route path="offersInfo/:offersId" element={<OffersInfo />} />
          <Route path="expertiseDetails/:expertiseId" element={<ExpertiseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
