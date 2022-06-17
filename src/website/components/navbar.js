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
        <div className="d-flex bd-highlight w-100 justify-content-end">
          <div className=" p-2 bd-highlight me-auto">
            <LogoWEROCK src={weROCK}></LogoWEROCK>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="#">Loja</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/equipa">A nossa equipa</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/parceiros">Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/contactos">Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/faq">FAQ</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight  d-flex align-items-center">
            <a href="/login">
              <PrimaryButton>Login/Register</PrimaryButton>
            </a>
          </div>
        </div>
      </StyledNavbar>
    ) : (
      <StyledNavbar key={0} className={props.className}>
        <div className="d-flex bd-highlight w-100 justify-content-end">
          <div className=" p-2 bd-highlight me-auto">
            <LogoWEROCK src={weROCK}></LogoWEROCK>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="#">Loja</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/equipa">A nossa equipa</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/parceiros">Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/contactos">Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/faq">FAQ</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight  d-flex align-items-center">
            <a href="/login">
              <PrimaryButton>Login/Register</PrimaryButton>
            </a>
          </div>
        </div>
      </StyledNavbar>
    );
  } else {
    return loaded ? (
      <StyledNavbar key={1} className={props.className}>
        <div className="d-flex bd-highlight w-100 justify-content-end">
          <div className=" p-2 bd-highlight me-auto">
            <LogoWEROCK src={weROCK}></LogoWEROCK>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="#">Loja</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/equipa">A nossa equipa</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/parceiros">Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/contactos">Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="/faq">Faqs</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight d-flex align-items-center">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Editar Perfil</Dropdown.Item>
              {operario === true && (
                <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
              )}

              <Dropdown.Item href="#/action-3">
                Histórico de Encomendas
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Definições</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Ajuda</Dropdown.Item>
              <Dropdown.Item onClick={logOut}>Sair</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </StyledNavbar>
    ) : (
      <></>
    );
  }
}

const StyledNavbar = styled(Navbar)`
  background-color: #30373e;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const StyledNavLink = styled(Nav.Link)`
  color: white;
  font-size: 28px;

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
