import "./app.scss"
import Hero from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>Service</section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <section>Portolio1</section>
    <section>Portolio2</section>
    <section>Portolio3</section>
    <section id="Contact">Contact</section>
  
  </div>;
};

export default App;
