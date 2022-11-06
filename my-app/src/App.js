import './App.css';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default App;
