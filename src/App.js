import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart'
import Hero from './components/homepage/Hero'
import Features from './components/homepage/Features';
function App() {
  return (<div className="font-inter">
    <Navbar />
    <Hero />
    <Features />
    {/* <Cart /> */}
    <Footer />
    </div>
  );
}

export default App;
