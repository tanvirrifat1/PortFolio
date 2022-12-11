import './App.css';
import About from './components/About/About';
import Contack from './components/Contact/Contact';
import Experience from './components/Exprience/Exprience';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Blogs from './components/Section/Blogs';
import SocialLink from './components/SocialLink/SocialLink';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contack></Contack>
      <SocialLink></SocialLink>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
