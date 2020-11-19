import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import React from 'react';

import NavBarPage from './components/navbar.component'
import Landing from './components/landing.component'
import Skills from './components/skills.component'
import About from './components/about.component'
import Projects from './components/projects.component'
import Contact from './components/contact.component'
import FooterPage from './components/footerpage.component'

function App() {
  return (
    <div className="app-background">
      <NavBarPage />
      <Landing />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <FooterPage />
    </div>
  );
}

export default App;
