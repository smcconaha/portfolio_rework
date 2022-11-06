import './App.css';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
