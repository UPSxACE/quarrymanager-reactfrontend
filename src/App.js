import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Equipa } from "./website/pages/equipa/equipa";
import { Home } from "./website/pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// App.js

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/*<h1>Welcome to React Router!</h1>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="equipa" element={<Equipa />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
