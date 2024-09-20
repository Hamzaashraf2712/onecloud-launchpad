import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/homepage/Hero';
import Features from './components/homepage/Features';
import MoreFeature from './components/homepage/MoreFeature';
import NextProjectSection from './components/homepage/NextProjectSection';
import ProjectCreationRequest from './components/ProjectCreationRequest';
import ProjectValidation from './components/ProjectValidation';
import MainComponent from './components/MainComponent';
import Cart from './components/Cart';
import PopupModal from './components/PopupModal';

function App() {
  const [isAuth, setIsAuth] = useState(false); // Authentication state

  return (
    <Router>
      <div className="font-inter">
        <Navbar isAuth={isAuth} />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <MoreFeature />
              <NextProjectSection />
            </>
          } />
          {/* Create new project */}
          <Route path="/create-new-project" element={<ProjectCreationRequest />} />
          {/* Go to my project - Project Validation */}
          <Route path="/validate-project" element={<ProjectValidation setIsAuth={setIsAuth} />} />
          {/* After successful validation */}
          <Route path="/dashboard" element={
            isAuth ? (
              <>
                <PopupModal />
                <MainComponent />
              </>
            ) : (
              <Navigate to="/validate-project" />
            )
          } />
          {/* Cart */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
