import { useState } from "react";
import { Button, Col, Row, Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import weROCK from "../../images/website/weROCK.png";
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
            <StyledNavLink href="#">Parceiros</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="#">Contacte-nos</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <StyledNavLink href="#">Faqs</StyledNavLink>
          </div>
          <div className="p-2 bd-highlight">
            <Button variant="light">Login/Register</Button>
          </div>
        </div>
      </StyledNavbar>
    );
  }

  return <Navbar></Navbar>;
}

const StyledNavbar = styled(Navbar)`
  background-color: #30373e;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const StyledNavLink = styled(Nav.Link)`
  color: white;
  font-size: 28px;
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
