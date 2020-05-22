import React, { Fragment } from "react";
import "./App.scss";

import Work from "./Work";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Work />

      {/* Blog */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
