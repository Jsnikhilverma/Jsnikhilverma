import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contect from "./Components/Contect/Contect";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contect />
      <Footer />
    </div>
  );
};

export default App;
