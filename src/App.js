import Header from './Components/Header/index';
import './assets/global.scss';
import Footer from './Components/Footer/index';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <section className=""> 
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
     </Routes>
     
    <Footer />
    </section>
  );
}

export default App;
