import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Project from './components/Project/Project';
import Team from './components/Team/Team';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Sheet from './components/Sheet/Sheet';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <div className="container">
          <Header />
          <Hero />
       </div>
       <Banner />
       <About />
       <Services />
       <Project />
       <Team />
       <Blog />
       <Contact />
       <Sheet />
       <Footer />
    </div>
  );
}

export default App;
