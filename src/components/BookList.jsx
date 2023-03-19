import React from 'react';
import Book from "./Book";


const BookList = (props) => {
  const { imageUrls, setSelectedImageUrl } = props
  return (
    <div className="container">
      <div className="row">
        {imageUrls.map( imageUrl =>

        <div className='col-lg-4 col-md-6 col-sm-12' key={imageUrl}>
          <Book imageUrl={imageUrl} key={imageUrl} setSelectedImageUrl={setSelectedImageUrl}/>
        </div>

          ) }
      </div>
    </div>
  );
};

export default BookList;
