import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Store';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { igorTheme } from './config/theme';

function App() {
  return (
    <ThemeProvider initialTheme={igorTheme}>
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
