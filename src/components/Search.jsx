import React from 'react';

const Search = (props) => {
  const {googleSearch, setItems} = props
  const handleSubmit = () => {
   googleSearch("fantasy");
  };
  return (
    <input type="text" className='form-search form-control' onChange={handleSubmit}/>
  );
};

export default Search;
