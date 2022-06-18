import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row,
  Container,
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import styled from "styled-components";
import weROCK from "../../images/website/weROCK.png";
import { PrimaryButton } from "./buttons";
import { Link } from "react-router-dom";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
export { NavbarComponent };

function accessCheck(permission_to_check) {
  let permission = false;

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

function NavbarComponent(props) {
  const [guest, setGuest] = useState(props.isGuest);
  const [loaded, setLoad] = useState(false);
  const [operario, setOperario] = useState(undefined);

  useState(() => {
    console.log("aaaBC: " + loaded);
    const sendGetRequest = async () => {
      try {
        const username = localStorage.getItem("AuthKey");
        const password = "";
        const endPoint =
          "http://localhost:8080/api/auth/check-permission?permission=operario";

        let resp = await axios(endPoint, {
          headers: {
            Authorization: "Basic " + btoa(username + ":" + password),
          },
        });

        setOperario(resp.data);
        setLoad(true);

        console.log("testee: " + resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  function logOut() {
    localStorage.removeItem("AuthKey");
    props.updateLogState(false);
  }

  if (guest) {
    return loaded ? (
      <StyledNavbar key={0} className={props.className}>
        <div className="d-flex bd-highlight w-100 justify-content-end align-items-center">
          <div className=" p-2 bd-highlight me-auto">
            <LogoWEROCK src={weROCK}></LogoWEROCK>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="#">Loja</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/equipa">A nossa equipa</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/parceiros">Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/contactos">Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/faq">FAQ</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight  d-flex align-items-center">
            <a to="/login">
              <PrimaryButton>Login/Register</PrimaryButton>
            </a>
          </div>
        </div>
      </StyledNavbar>
    ) : (
      <StyledNavbar key={0} className={props.className}>
        <div className="d-flex bd-highlight w-100 justify-content-end align-items-center">
          <div className=" p-2 bd-highlight me-auto">
            <Link to={"/home"}>
              <LogoWEROCK src={weROCK}></LogoWEROCK>
            </Link>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to={"/loja"}>Loja</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to={"/equipa"}>A nossa equipa</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to={"/parceiros"}>Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to={"/contactos"}>Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to={"/faq"}>FAQ</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight  d-flex align-items-center">
            <StyledNavLink to={"/login"}>
              <PrimaryButton>Login/Register</PrimaryButton>
            </StyledNavLink>
          </div>
        </div>
      </StyledNavbar>
    );
  } else {
    return loaded ? (
      <StyledNavbar key={1} className={props.className}>
        <div className="d-flex bd-highlight w-100 justify-content-end align-items-center">
          <div className=" p-2 bd-highlight me-auto">
            <LogoWEROCK src={weROCK}></LogoWEROCK>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="#">Loja</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/equipa">A nossa equipa</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/parceiros">Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/contactos">Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/faq">Faqs</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight d-flex align-items-center">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Link className="dropdown-item" to="/perfil">
                Editar Perfil
              </Link>
              {operario === true && (
                <Link className="dropdown-item" to="/dashboard/home">
                  Dashboard
                </Link>
              )}

              <Link className="dropdown-item" to="encomendas">
                Histórico de Encomendas
              </Link>
              <Link className="dropdown-item" to="/perfil/definicoes">
                Definições
              </Link>
              <Link className="dropdown-item" to="#">
                Ajuda
              </Link>
              <Link className="dropdown-item" onClick={logOut} to="">
                Sair
              </Link>
            </DropdownButton>
          </div>
        </div>
      </StyledNavbar>
    ) : (
      <StyledNavbar key={1} className={props.className}>
        <div className="d-flex bd-highlight w-100 justify-content-end align-items-center">
          <div className=" p-2 bd-highlight me-auto">
            <LogoWEROCK src={weROCK}></LogoWEROCK>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="#">Loja</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/equipa">A nossa equipa</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/parceiros">Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/contactos">Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/faq">Faqs</StyledNavLink>
          </div>
        </div>
      </StyledNavbar>
    );
  }
}

const StyledNavbar = styled(Navbar)`
  background-color: #30373e;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const StyledNavLink = styled(Link)`
  color: white;
  font-size: 28px;
  text-decoration: none;

  &:hover {
    color: #d69b7f;
  }

  &:focus {
    color: #d69b7f;
  }
`;

const LogoWEROCK = styled.img`
  width: 191px;
  height: auto;
`;

{
  /* const StylizedNavLink = styled.a`
  color: black;
`;*/
}
