import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.scss";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./style/mediaquerry.scss"
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      {/* <img src="../assets" alt="" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
