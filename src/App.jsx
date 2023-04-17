import { useState } from "react";
import {
  Navbar,
  Hero,
  Benefits,
  Blog,
  Brands,
  Faq,
  Footer,
  Kursus,
  TentangKami,
  Testimonial,
} from "./sections";
import { Container } from "./components";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Brands />
      <Benefits />
      <TentangKami />
      <Kursus />
      {/* navbar */}

      {/* hero section */}
    </div>
  );
}

export default App;
