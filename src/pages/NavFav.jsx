/*global chrome*/
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
  function testalert(arg) {
    console.log(arg);
  }
  const test = () => {
    chrome.tabs.query({ active: true }, function (tabs) {
      var tab = tabs[0];
      chrome.tabs.executeScript(
        tab.id,
        {
          code: "document.querySelector('#app').__vue__",
        },
        testalert
      );
    });
  };
  return (
    <>
      <NavDropdown title="Favorites" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        {/* <NavDropdown.Divider />  */}
      </NavDropdown>

      {Config.dev_mode && (
        <NavDropdown title="Admin things" id="basic-nav-dropdown">
          <NavDropdown.Item className="text-bold" onClick={test}>
            Admin things
          </NavDropdown.Item>
          <NavDropdown.Item onClick={ClickAdmin}>
            Generate new json
          </NavDropdown.Item>
        </NavDropdown>
      )}
    </>
  );
}
