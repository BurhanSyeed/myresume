// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
import About from './components/About';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbar /> */}
        <Router>
        <Navbar />
          <Routes>
                  <Route
                    exact
                    path="/"
                    element={<Home />}
                  ></Route>
                  <Route
                    exact
                    path="/about"
                    element={<About />}
                  ></Route>
                  <Route
                    exact
                    path="/service"
                    element={<Service />}
                  ></Route>
                  <Route
                    exact
                    path=""
                    element={<Counter />}
                  ></Route>
                  <Route
                    exact
                    path="contact"
                    element={<Contact />}
                  ></Route>
              <Route
                    exact
                    path="contact"
                    element={<Footer />}
                  ></Route>
             
             </Routes>
        </Router>
        <Footer />
    </>
    
  );
}

export default App;
