import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Passions from './pages/Passions';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import useTheme from './hooks/useTheme';
import './styles/global.css';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="app">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/passions" element={<Passions />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
