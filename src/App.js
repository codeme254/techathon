import "./App.css";
import React from "react";
import Home from "./Home/Home";
import Navigation from "./Navigation/Nav";
import About from "./About/About";
import Speakers from "./Speakers/Speakers";
import Organizers from "./Organizers/Organizers";
import Pricing from "./Pricing/Pricing";
import News from "./News/News";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Speakers />
      <Organizers />
      <Pricing />
      <News />
      <Footer />
    </div>
  );
}

export default App;
