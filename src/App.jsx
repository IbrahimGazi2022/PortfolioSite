import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <section className="hero">
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>About</section>
      <section>Parallax</section>
      <section>Skill</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
