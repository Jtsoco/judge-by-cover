import React from 'react'
function Book(props) {
  const { imageUrl, setSelectedImageUrl} = props;
  const handleClick = () => {
    setSelectedImageUrl(imageUrl);
  };
  return (
    <div>
      <img src={imageUrl} alt="a book" className='img-fluid selected-book-actual' onClick={handleClick}/>
    </div>

  );
}

export default Book;
