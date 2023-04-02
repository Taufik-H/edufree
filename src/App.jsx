import { useState } from 'react';
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
} from './sections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
      <Benefits />
      <TentangKami />
      <Kursus />
      <Testimonial />
      <Faq />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
