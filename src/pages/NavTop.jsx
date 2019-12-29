import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Config from "../config";
import NavSearchBar from './NavSearchBar';
import NavFav from './NavFav';

function NavTop() {

  function switchContent(s) {
    switch (s) {

      case 'fav':
        alert('Hello!' + s);
        break;

      case 'news':
        alert('Hello!' + s);
        break;
    }

  }

  return (<>

    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">{Config.Name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button variant="dark" onClick={() => switchContent("news")}>News</Button>
          <NavFav />
        </Nav>
        <NavSearchBar />
      </Navbar.Collapse>
    </Navbar>

  </>
  );
}

export default NavTop;
