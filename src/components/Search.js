import React, { useState } from "react";

function Search({ onSearchChange }) {

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(e){
    setSearchTerm(e.target.value)
    onSearchChange(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        
        <input className="prompt" onChange={handleSearchChange} value={searchTerm}/>
        <i className="search icon" />
     
      </div>
    </div>
  );
}

export default Search;
