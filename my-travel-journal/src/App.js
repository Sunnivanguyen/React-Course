import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from "./data";

export default function App() {
  const destination = data.map((item) => <Main key={item.id} item={item} />);
  return (
    <div>
      <Navbar />
      <section className="main">{destination}</section>
    </div>
  );
}
