import React, { useState } from "react";

export default function Search(props) {
  const { customStyle1 } = props;

  const [value, setValue] = useState("");

  const changedValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-3">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          aria-label="Search"
          className="form-control me-2"
          placeholder="Search"
          type="search"
          value={value}
          onChange={changedValue}
          style={customStyle1}
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
