import React from 'react'
function Book(props) {
  const { imageUrl, setSelectedImageUrl} = props;
  const handleClick = () => {
    setSelectedImageUrl(imageUrl);
  };
  return (
    <div>
      <img src={imageUrl} alt="a book" className='img-fluid' onClick={handleClick}/>
      <div className="" style={{color: 'red'}}>I'm a book!</div>
    </div>

  );
}

export default Book;
