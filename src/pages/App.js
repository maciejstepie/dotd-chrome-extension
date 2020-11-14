import React from "react";
import "../styles/App.scss";
import { NavTop } from "./NavTop";
import Content from "./Content";
import { useSelector } from "react-redux";
import RaidTable from "./RaidTable/Index";
import { GeneratorJSON } from "./Admin/GeneratorJSON";

function App() {
  const page = useSelector(state => state.openRaidReducer);

  return (
    <div className="App">
      <NavTop />
      {page ? page === "admin" ? <GeneratorJSON /> : <RaidTable /> : <Content />}
    </div>
  );
}

export default App;
