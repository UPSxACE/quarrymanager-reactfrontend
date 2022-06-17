import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { Equipa } from "./website/pages/equipa/equipa";
import { Home } from "./website/pages/home/home";
import { Parceiros } from "./website/pages/parceiros/parceiros";
import { Footer } from "./website/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavbarComponent } from "./website/components/navbar";
import { Pedreiras } from "./website/pages/pedreiras/pedreiras";
import { Criadores } from "./website/pages/criadores/criadores";
import { Contactos } from "./website/pages/contactos/contactos";
import { Login } from "./website/pages/login/login";

import { Register } from "./website/pages/register/register";

import { Faq } from "./website/pages/faq/faq";
import { DashboardHome } from "./dashboard/pages/home/home";
import { DashboardLotes } from "./dashboard/pages/lotes/lotes";
import { DashboardNovoLote } from "./dashboard/pages/lotes/novoLote";

import { DashboardStock } from "./dashboard/pages/stock/stock";
import { DashboardEncomendas } from "./dashboard/pages/encomendas/encomendas";
import { DashboardLoja } from "./dashboard/pages/loja/loja";
import { DashboardUtilizadores } from "./dashboard/pages/utilizadores/utilizadores";
import { DashboardLocais } from "./dashboard/pages/locais/locais";
import { DashboardNovoLocalArmazem } from "./dashboard/pages/locais/novoLocalArmazem";
import { DashboardNovoLocalExtracao } from "./dashboard/pages/locais/novoLocalExtracao";
import { DashboardLogs } from "./dashboard/pages/logs_dashboard/logs";
import { DashboardAjuda } from "./dashboard/pages/ajuda/ajuda";
import { EditarLocalArmazem } from "./dashboard/pages/locais/editarLocais";
import { EditarLocalExtracao } from "./dashboard/pages/locais/editarLocais";

import { MeuPerfil } from "./website/pages/perfil/perfil";
import { DefinicoesPerfil } from "./website/pages/perfil/definicoesPerfil";
import { DashboardNovoMaterial } from "./dashboard/pages/lotes/novoMaterial";
import { DashboardNovaCor } from "./dashboard/pages/lotes/novaCor";
import { DashboardNovoProduto } from "./dashboard/pages/lotes/novoProduto";

import { LojaHome } from "./website/pages/loja/loja";

import { EditarProduto } from "./dashboard/pages/loja/editarLoja";
import { EditarLote } from "./dashboard/pages/lotes/editarLote";
import { EditarStock } from "./dashboard/pages/stock/editarStock";
import { EditarUtilizador } from "./dashboard/pages/utilizadores/editarUtilizador";
import { EditarCor } from "./dashboard/pages/lotes/editarCor";
import { EditarMaterial } from "./dashboard/pages/lotes/editarMaterial";
import { ViewProduto } from "./dashboard/pages/lotes/viewProduto";
import { ViewMaterial } from "./dashboard/pages/lotes/viewMaterial";
import { ViewCor } from "./dashboard/pages/lotes/viewCor";
import { ViewLote } from "./dashboard/pages/lotes/viewLote";
import { ViewUtilizador } from "./dashboard/pages/utilizadores/viewUtilizador";
import { ViewLocalArmazem } from "./dashboard/pages/locais/viewLocalArmazem";
import { ViewLocalExtracao } from "./dashboard/pages/locais/viewLocalExtracao";

// App.js

function AccessCheck(permission_to_check) {
  return true;
}

function Private(props) {
  return AccessCheck(props.check) ? <>{props.children}</> : <Navigate to="/" />;
}

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

function Website() {
  return (
    <div className="Website">
      <NavbarComponent isGuest={true} />
      <Outlet />
      <Footer />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="Dashboard">
      <Outlet />
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </div>
  );
}

function Perfil() {
  return (
    <div className="Website">
      <NavbarComponent isGuest={true} />
      <Outlet />
      <Footer />
    </div>
  );
}

function Loja() {
  return (
    <div className="Loja">
      <NavbarComponent isGuest={true} />
      <Outlet />
      <Footer />
    </div>
  );
}

function App(props) {
  return (
    <div className="App">
      {/*<NavbarComponent isGuest={true} />*/}
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/" element={<Website />}>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <Private check="admin">
                <About />
              </Private>
            }
          />
          <Route path="equipa" element={<Equipa />} />
          <Route path="home" element={<Home />} />
          <Route path="parceiros" element={<Parceiros />} />
          <Route path="pedreiras" element={<Pedreiras />} />
          <Route path="criadores" element={<Criadores />} />
          <Route path="contactos" element={<Contactos />} />
          <Route path="login" element={<Login />} />
          <Route path="index" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="faq" element={<Faq />} />
        </Route>

        <Route path="dashboard/" element={<Dashboard />}>
          <Route path="/dashboard/" element={<DashboardHome />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="stock" element={<DashboardStock tab={0} />} />
          <Route path="lotes" element={<DashboardLotes />} />
          <Route path="novo-material" element={<DashboardNovoMaterial />} />
          <Route path="nova-cor" element={<DashboardNovaCor />} />
          <Route path="novo-produto" element={<DashboardNovoProduto />} />
          <Route path="encomendas" element={<DashboardEncomendas />} />
          <Route path="loja" element={<DashboardLoja tab={0} />} />

          <Route
            path="utilizadores"
            element={<DashboardUtilizadores tab={0} />}
          />
          <Route path="locais" element={<DashboardLocais tab={0} />} />
          <Route
            path="novo-local-armazem"
            element={<DashboardNovoLocalArmazem />}
          />
          <Route
            path="novo-local-extracao"
            element={<DashboardNovoLocalExtracao />}
          />
          <Route
            path="editar-local-extracao"
            element={<EditarLocalExtracao />}
          />
          <Route path="ver-extracao/:id" element={<ViewLocalExtracao />} />

          <Route path="editar-produto/:id" element={<EditarProduto />} />
          <Route path="ver-produto/:id" element={<ViewProduto />} />
          <Route path="editar-stock" element={<EditarStock />} />

          <Route path="editar-lote" element={<EditarLote />} />

          <Route path="editar-local-armazem" element={<EditarLocalArmazem />} />
          <Route path="ver-armazem/:id" element={<ViewLocalArmazem />} />

          <Route path="editar-cliente" element={<EditarUtilizador />} />

          <Route path="ver-user/:id" element={<ViewUtilizador />} />

          <Route path="editar-cor" element={<EditarCor />} />
          <Route path="ver-cor/:id" element={<ViewCor />} />
          <Route path="editar-material" element={<EditarMaterial />} />
          <Route path="ver-material/:id" element={<ViewMaterial />} />
          <Route path="editar-produto" element={<EditarProduto />} />
          <Route path="logs" element={<DashboardLogs tab={0} />} />

          <Route path="ajuda" element={<DashboardAjuda />} />
          <Route path="novo-lote" element={<DashboardNovoLote />} />
          <Route path="ver-lote/:codigo_lote" element={<ViewLote />} />
        </Route>

        <Route path="perfil" element={<Perfil />}>
          <Route path="definicoes" element={<DefinicoesPerfil />}></Route>
          <Route path="/perfil/" element={<MeuPerfil />}></Route>
        </Route>

        <Route path="loja" element={<Loja />}>
          <Route path="/loja/" element={<LojaHome />}></Route>
          <Route
            path="loja/produto/:idProduto"
            element={<DefinicoesPerfil />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
