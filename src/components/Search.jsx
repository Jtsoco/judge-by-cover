import React from 'react';

const Search = (props) => {
  const {googleSearch, setItems} = props
  const handleSubmit = (event) => {
    if (event.key === "Enter") {

      console.log(event.key)
      console.log(event.currentTarget.value)
      googleSearch(event.currentTarget.value);
    };
  };
  return (
    <input type="text" className='form-search form-control' onKeyDown={handleSubmit}/>
  );
};

export default Search;
