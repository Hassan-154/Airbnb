import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import HeaderSection from './components/HeaderSection';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderSection/>
      <AboutPage/>
      <Services/>
      <WhatsApp/>
    </div>
  );
}

export default App;
