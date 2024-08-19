import ResumeState from './Context/ResumeState';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Modeles from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ErrorPage from './Pages/Error/ErrorPage';
import IntroPage from './Pages/Intro/intro';
import TemplatePage from './Pages/Template/intro';
import Template from './Components/Intro/template';
import Introduction from './Components/Intro/Introduction';
import HomeAndIntro from './Pages/HomeAndIntro/Home';

function App() {

  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<HomeAndIntro />} />
          <Route exact path="/introduction" element={<Introduction />} />
          <Route exact path="/modeles" element={<Modeles />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
