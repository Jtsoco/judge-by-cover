import React from 'react';
import { useState } from 'react';

const SelectedBook = (props) => {
  const { bookObject, setSelectedBookObject} = props;
  const handleClick = () => {
    setSelectedBookObject(bookObject);
  };
  const [url, setUrl] = useState(bookObject.thumbnail);
  const makeImageSmall = () => {
    bookObject.thumbnail = bookObject.thumbnail.replace("zoom=0", "zoom=1" );
    setUrl(bookObject.thumbnail)
  };
  const makeImageLarge = () => {
    bookObject["thumbnail"] = bookObject.thumbnail.replace("zoom=1", "zoom=0" );
    setUrl(bookObject.thumbnail)

  };
  console.log(bookObject)
  return (
    <div>
      <div>
        <button onClick={makeImageSmall}>small image</button>
        <button onClick={makeImageLarge}>large image</button>
      </div>
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
