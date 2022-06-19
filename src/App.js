import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
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

import { ProdutoLoja } from "./website/pages/loja/produto";

import { ViewMaterial } from "./dashboard/pages/lotes/viewMaterial";
import { ViewCor } from "./dashboard/pages/lotes/viewCor";
import { ViewLote } from "./dashboard/pages/lotes/viewLote";
import { ViewUtilizador } from "./dashboard/pages/utilizadores/viewUtilizador";
import { ViewLocalArmazem } from "./dashboard/pages/locais/viewLocalArmazem";
import { ViewLocalExtracao } from "./dashboard/pages/locais/viewLocalExtracao";
import { useEffect, useState } from "react";
import axios from "axios";
import { DashboardNovaTransportadora } from "./dashboard/pages/loja/novaTransportadora";

// App.js

function accessCheck(permission_to_check) {
  let permission = undefined;

  const sendGetRequest = () => {
    const username = localStorage.getItem("AuthKey");
    const password = "";
    const endPoint =
      "http://localhost:8080/api/auth/check-permission?permission=" +
      permission_to_check;

    return axios(endPoint, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    }).then((response) => {
      console.log("aaa:" + response.data);
      return response;
    });
  };

  return sendGetRequest();
}

function isLoggedCheck() {
  console.log(localStorage.getItem("AuthKey"));
  return !(
    localStorage.getItem("AuthKey") === null ||
    localStorage.getItem("AuthKey") === undefined
  );
}

function Private(props) {
  const [permission, setPermission] = useState(undefined);

  useState(() => {
    const sendPermissionRequest = async () => {
      try {
        const username = localStorage.getItem("AuthKey");
        const password = "";
        const endPoint =
          "http://localhost:8080/api/auth/check-permission?permission=" +
          props.check;

        console.log("AAAAAAA: " + permission);
        let resp = await axios(endPoint, {
          headers: {
            Authorization: "Basic " + btoa(username + ":" + password),
          },
        });

        setPermission(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendPermissionRequest();
  }, []);

  if (permission === undefined) {
    return <></>;
  }

  return permission ? <>{props.children}</> : <Navigate to="/" />;
}

function GuestOnly(props) {
  return isLoggedCheck() ? <Navigate to="/" /> : <>{props.children}</>;
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

function Website(props) {
  return (
    <div className="Website">
      {props.guest ? (
        <NavbarComponent updateLogState={props.updateLogged} isGuest={true} />
      ) : (
        <NavbarComponent updateLogState={props.updateLogged} isGuest={false} />
      )}
      <Outlet />
      <Footer />
    </div>
  );
}

function WebsiteOperario(props) {
  return (
    <Private check={"operario"}>
      <div className="Website">
        {props.guest ? (
          <NavbarComponent updateLogState={props.updateLogged} isGuest={true} />
        ) : (
          <NavbarComponent
            updateLogState={props.updateLogged}
            isGuest={false}
          />
        )}
        <Outlet />
        <Footer />
      </div>
    </Private>
  );
}

function Dashboard() {
  return (
    <Private check={"operario"}>
      <div className="Dashboard">
        <Outlet />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </div>
    </Private>
  );
}

function Perfil() {
  return (
    <div className="Website">
      {!isLoggedCheck() ? (
        <NavbarComponent isGuest={true} />
      ) : (
        <NavbarComponent isGuest={false} />
      )}

      <Outlet />
      <Footer />
    </div>
  );
}

function Loja() {
  return (
    <div className="Loja">
      <NavbarComponent isGuest={!isLoggedCheck()} />
      <Outlet />
      <Footer />
    </div>
  );
}

function App(props) {
  const [isLogged, updateSession] = useState(isLoggedCheck());

  function updateLogState(value) {
    updateSession(value);
  }

  return (
    <div className="App">
      {/*<NavbarComponent isGuest={true} />*/}
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route
          path="/"
          element={
            isLogged ? (
              <Website key={0} updateLogged={updateLogState} guest={false} />
            ) : (
              <Website key={1} updateLogged={updateLogState} guest={true} />
            )
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="imagem" element={<Imagem />} />

          <Route path="equipa" element={<Equipa />} />
          <Route path="home" element={<Home />} />
          <Route path="parceiros" element={<Parceiros />} />
          <Route path="pedreiras" element={<Pedreiras />} />
          <Route path="criadores" element={<Criadores />} />
          <Route path="contactos" element={<Contactos />} />
          <Route
            path="login"
            element={
              <GuestOnly>
                <Login logged={isLoggedCheck} updateLogged={updateLogState} />
              </GuestOnly>
            }
          />
          <Route path="index" element={<Home />} />
          <Route
            path="register"
            element={
              <GuestOnly>
                <Register />
              </GuestOnly>
            }
          />
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
            path="nova-transportadora"
            element={<DashboardNovaTransportadora />}
          />

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
            path="editar-local-extracao/:id"
            element={<EditarLocalExtracao />}
          />
          <Route
            path="ver-local-extracao/:id"
            element={<ViewLocalExtracao />}
          />

          <Route path="editar-produto/:id" element={<EditarProduto />} />
          <Route path="ver-produto/:id" element={<ViewProduto />} />
          <Route path="editar-stock" element={<EditarStock />} />

          <Route path="editar-lote/:codigo_lote" element={<EditarLote />} />

          <Route
            path="editar-local-armazem/:id"
            element={<EditarLocalArmazem />}
          />
          <Route path="ver-local-armazem/:id" element={<ViewLocalArmazem />} />

          <Route path="editar-user/:id" element={<EditarUtilizador />} />

          <Route path="ver-user/:id" element={<ViewUtilizador />} />

          <Route path="editar-cor/:id" element={<EditarCor />} />
          <Route path="ver-cor/:id" element={<ViewCor />} />
          <Route path="editar-material/:id" element={<EditarMaterial />} />
          <Route path="ver-material/:id" element={<ViewMaterial />} />
          <Route path="editar-produto/:id" element={<EditarProduto />} />
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
          <Route path="produto/:id" element={<ProdutoLoja />}></Route>
        </Route>

        <Route
          path="about"
          element={
            isLogged ? (
              <WebsiteOperario
                key={0}
                updateLogged={updateLogState}
                guest={false}
              />
            ) : (
              <WebsiteOperario
                key={1}
                updateLogged={updateLogState}
                guest={true}
              />
            )
          }
        >
          <Route path={"/about/"} element={<About></About>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Imagem() {
  const [img, setImg] = useState(
    "https://yt3.ggpht.com/yti/APfAmoEx_S6AowQIUQh7LAWrbpPWgbmwacK2ImrWhNNuXA=s108-c-k-c0x00ffffff-no-rj"
  );
  const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
  const password = "";

  const fetchImage = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/profile/test-image-upload",
      {
        headers: {
          Authorization: "Basic " + btoa(username + ":" + password),
        },
        responseType: "blob",
      }
    );
    console.log(res);
    const imageBlob = await res.data;
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} height={200} alt="icons" />
    </>
  );
}

export default App;
