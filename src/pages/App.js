import React from "react";
import "./App.scss";
import { NavTop } from "./NavTop";
import Content from "./Content";
import { useSelector } from "react-redux";
import RaidTable from "./RaidTable/Index";
import { AdminTools } from "./Admin";

function App() {
  const page = useSelector(state => state.openRaidReducer);

  return (
    <div className="App">
      <NavTop />
      {page ? page === "admin" ? <AdminTools /> : <RaidTable /> : <Content />}
    </div>
  );
}

export default App;
