import React,{ useEffect, useState }  from 'react';
import './App.css';
import AOS from 'aos';
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
import AllRight from './components/AllRight';
import Feature from './components/Feature';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    }); 
  },);

  return (
    <div className="App">
      <NavBar />
      <HeaderSection/>
      <AboutPage/>
      <Services/>
      <Feature/>
      <WhatsApp/>
      <AllRight/>
    </div>
  );
}

export default App;
