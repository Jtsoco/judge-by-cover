import React from 'react'
function Book(props) {
  const { bookObject, changeSelectBook, changeUrl} = props;
  const handleClick = () => {
    changeSelectBook(bookObject);
    changeUrl(bookObject.thumbnail)
  };
  console.log(bookObject.thumbnail)
  return (
    <div>
      <img src={bookObject.thumbnail} alt="a book" className='img-fluid selected-book-actual' onClick={handleClick}/>
    </div>

  );
}

export default Book;
