import { useState } from "react";
import { Button, Col, Row, Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
export { NavbarComponent, StylizedNavbar };

function NavbarComponent(props) {
  const [guest, setGuest] = useState(props.isGuest);
  if (guest) {
    return (
      <Navbar className={props.className}>
        <div className="d-flex bd-highlight mb-3 w-100 justify-content-end">
          <div className=" p-2 bd-highlight me-auto">teste</div>
          <div className="p-2 bd-highlight">
            <Nav.Link href="#">Loja</Nav.Link>
          </div>
          <div className="p-2 bd-highlight">
            <Nav.Link href="/equipa">A nossa equipa</Nav.Link>
          </div>
          <div className="p-2 bd-highlight">
            <Nav.Link href="#">Parceiros</Nav.Link>
          </div>
          <div className="p-2 bd-highlight">
            <Nav.Link href="#">Contacte-nos</Nav.Link>
          </div>
          <div className="p-2 bd-highlight">
            <Nav.Link href="#">Faqs</Nav.Link>
          </div>
          <div className="p-2 bd-highlight">
            <Button variant="light">Login/Register</Button>
          </div>
        </div>
      </Navbar>
    );
  }

  return <Navbar></Navbar>;
}

const StylizedNavbar = styled(NavbarComponent)`
  background-color: #30373e;
`;

const StylizedNavLink = styled.a`
  color: black;
`;
