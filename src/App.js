import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Hero from './components/homepage/Hero'
import Features from './components/homepage/Features';
import NextProjectSection from './components/homepage/NextProjectSection';
import MoreFeature from './components/homepage/MoreFeature';
import ProjectCreationRequest from './components/ProjectCreationRequest';
import ProjectValidation from './components/ProjectValidation';
import MainComponent from './components/MainComponent'
import CloudPlatformPopup from './components/CloudPlatformPopup';
import SidebarWithPopup from './components/SidebarWithPopup';
import PopupModal from './components/PopupModal';
function App() {
  return (<div className="font-inter">
    <Navbar />
    {/* <MainComponent /> */}
    {/* <ProjectCreationRequest /> */}
      {/* <ProjectValidation /> */}
{/* <SidebarWithPopup/> */}
< PopupModal />
  {/* <Hero />
    <Features />
    <MoreFeature />
    <NextProjectSection /> */}
    {/* <Cart /> */}
    <Footer />
    </div>
  );
}

export default App;
