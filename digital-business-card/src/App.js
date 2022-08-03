import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <nav className="business-card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </nav>
  );
}

export default App;
