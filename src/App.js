import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
