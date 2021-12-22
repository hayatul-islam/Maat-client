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


function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teams" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
