import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Equipa } from "./website/pages/equipa/equipa";
import { Home } from "./website/pages/home/home";
import { Parceiros } from "./website/pages/parceiros/parceiros";
import { Footer } from "./website/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavbarComponent } from "./website/components/navbar";
import { Pedreiras } from "./website/pages/pedreiras/pedreiras";
import { Criadores } from "./website/pages/criadores/criadores";
<<<<<<< HEAD
import { Contactos } from "./website/pages/contactos/contactos";
=======
import { Login } from "./website/pages/login/login";
>>>>>>> feature/login.js

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
      <NavbarComponent isGuest={true} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="equipa" element={<Equipa />} />
        <Route path="home" element={<Home />} />
        <Route path="parceiros" element={<Parceiros />} />
        <Route path="pedreiras" element={<Pedreiras />} />
        <Route path="criadores" element={<Criadores />} />
        <Route path="contactos" element={<Contactos />} />
        <Route path="login" element={<Login />} />
        <Route path="index" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
