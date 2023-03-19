import React from 'react'
function Book(props) {
  const { imageUrl} = props;
  return (
    <div>
      <img src={imageUrl} alt="a book" className='img-fluid'/>
      <div className="" style={{color: 'red'}}>I'm a book!</div>
    </div>

  );
}

export default Book;
