import { useState } from "react";
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
import styled from "styled-components";
import weROCK from "../../images/website/weROCK.png";
import { PrimaryButton } from "./buttons";
export { NavbarComponent };

function NavbarComponent(props) {
  const [guest, setGuest] = useState(props.isGuest);
  if (guest) {
    return (
      <StyledNavbar className={props.className}>
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
  }

  return (
    <StyledNavbar className={props.className}>
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
            <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Histórico de Encomendas
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Definições</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Ajuda</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sair</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </StyledNavbar>
  );
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
