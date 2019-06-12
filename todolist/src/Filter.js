import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "./actions";

const Filter = ({ filter, updateFilter }) => {
  return (
    <div>
      <label for="toto">Filter</label>

      <select
        id="toto"
        value={filter}
        onChange={e => updateFilter(e.target.value)}
      >
        <option value="SHOW_ALL">SHOW ALL</option>
        <option value="SHOW_TODO">SHOW TODO</option>
        <option value="SHOW_DONE">SHOW DONE</option>
      </select>
    </div>
  );
};

const mstp = ({ filter }) => ({ filter });
const mdtp = dispatch => ({
  updateFilter: filter =>
    dispatch(updateFilter(filter))
});

export default connect(
  mstp,
  mdtp
)(Filter);
