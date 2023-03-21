import React from 'react';

const SelectedBook = (props) => {
  const { bookObject, setSelectedBookObject} = props;
  const handleClick = () => {
    setSelectedBookObject(bookObject);
  };
  console.log(bookObject)
  return (
    <div>
      <img src={bookObject.thumbnail} alt="a book" className='img-fluid selected-book-actual' onClick={handleClick}/>
      <h2>{bookObject.title}</h2>
      <p>{bookObject.description}</p>
      <a href={bookObject.infoLink}>
        <button>Buy</button>
      </a>
    </div>

  );
};

export default SelectedBook;
