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
  const [put, findStats] = useState({});

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

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/profile/get-profile?expand=username",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        findStats(resp.data);
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
            <Link to={"/home"}>
              <LogoWEROCK src={weROCK}></LogoWEROCK>
            </Link>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/loja">Loja</StyledNavLink>
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
            <Link to="/login">
              <PrimaryButton>Login/Register</PrimaryButton>
            </Link>
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
            <Link to={"/home"}>
              <LogoWEROCK src={weROCK}></LogoWEROCK>
            </Link>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink to="/loja">Loja</StyledNavLink>
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
            <ButtonDropdown
              id="dropdown-basic-button"
              title={put.username ? put.username : ""}
              align="end"
            >
              <Link className="dropdown-item" to="/perfil">
                Editar Perfil
              </Link>
              {operario === true && (
                <Link className="dropdown-item" to="/dashboard/home">
                  Dashboard
                </Link>
              )}

              <Link className="dropdown-item" to="encomendas">
                Encomendas
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
            </ButtonDropdown>
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

const ButtonDropdown = styled(DropdownButton)`
  background-color: #30373e;
  color: white;
  border-radius: 17px;
  border: 0;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));
  z-index: 99;
  


  .btn-primary {
    color: white;
    background-color:  #30373e;
    border-color: #30373e;

  &:active {
    color: #fff;
    background-color: #4c4f52;
    border: 0;
  }

  &:hover {
    color: #fff;
    background-color: #4c4f52;
    border: 0;
  }

  &:focus {
    color: #fff;
    background-color: #4c4f52;
    border: 0;
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }

  &:active:focus {
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }

  &.btn-check:active+.btn-primary:focus,  &.btn-check:checked+.btn-primary:focus,  &.btn-primary.active:focus,  &.btn-primary:active:focus,  &.btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.0rem rgb(0 0 0 / 0%);
}

&.btn-primary.dropdown-toggle {
    color: #30373e; 
    background-color:  white;
    border-color: #30373e;
}

`;

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
