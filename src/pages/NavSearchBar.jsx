import React from "react";
//import { Form, FormControl } from 'react-bootstrap';
import Select from "react-select";
import { GetTypes } from "../Raids/Raids";
import { SELECT_CHANGED_ACTION } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export function NavSearchBar() {
  const dispatch = useDispatch();

  const handleChange = (selectedOption) => {
    dispatch(SELECT_CHANGED_ACTION(selectedOption));
  };

  const selectedOption = useSelector((state) => state.searchReducer);
  const tmpGetTypes = GetTypes(); //idk why but it fix
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={tmpGetTypes}
      placeholder={"Write type of raid..."}
      isMulti={true}
      isSearchable={true}
      className="raidSearch"
    />
  );
}
