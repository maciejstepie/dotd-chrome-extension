import React from "react";
import "./App.scss";
import { NavTop } from "./NavTop";
import Content from "./Content";
import { useSelector } from "react-redux";
import RaidTable from "./RaidTable/Index";

function App() {
  const page = useSelector(state => state.openRaidReducer);

  return (
    <div className="App">
      <NavTop />
      {page ? <RaidTable /> : <Content />}
    </div>
  );
}

export default App;
