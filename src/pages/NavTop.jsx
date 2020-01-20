import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Config from "../config";
import { NavSearchBar } from "./NavSearchBar";
import { NavFav } from "./NavFav";
import { OPEN_RAID_ACTION } from "../redux/actions";
import { useDispatch } from "react-redux";

export function NavTop() {
  const dispatch = useDispatch();
  const ClickBack = raidRoute => {
    dispatch(OPEN_RAID_ACTION(raidRoute));
  };

  const switchContent = s => {
    switch (s) {
      case "fav":
        alert("Hello!" + s);
        break;

      case "news":
        alert("Hello!" + s);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand
          onClick={() => {
            ClickBack(null);
          }}
        >
          {Config.Name}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="dark" onClick={() => switchContent("news")}>
              News
            </Button>
            <NavFav />
          </Nav>
          <NavSearchBar />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
