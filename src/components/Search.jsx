import React from 'react';

const Search = (props) => {
  const {googleSearch} = props
  const handleSubmit = (event) => {
    if (event.key === "Enter") {

      console.log(event.key);
      console.log(event.currentTarget.value);
      googleSearch(event.currentTarget.value);
    };
  };
  return (
    <div className='search-bar'>
      <input type="text" className='form-search form-control' onKeyUp={handleSubmit}/>
    </div>
  );
};

export default Search;
