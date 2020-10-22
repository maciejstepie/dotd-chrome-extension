import React from "react";
import Config from "../config";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { OPEN_RAID_ACTION } from "../redux/actions";

export function NavFav() {
  const dispatch = useDispatch();

  const ClickAdmin = () => {
    dispatch(OPEN_RAID_ACTION("admin"));
  };
  return (
    <NavDropdown title="Favorites" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      {Config.dev_mode === true && (
        <NavDropdown.Item onClick={ClickAdmin}>Admin</NavDropdown.Item>
      )}
    </NavDropdown>
  );
}
