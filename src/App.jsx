import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Container from "./components/Container";
import Footer from "./components/footer/Footer";
import NProgressLoader from "../src/components/nprogress/NprogressLoader";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NProgressLoader />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
