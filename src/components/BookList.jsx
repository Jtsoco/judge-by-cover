import React from 'react';
import Book from "./Book";


const BookList = (props) => {
  const { items, setSelectedImageUrl } = props;
  console.log(items);
  const imgUrls = items.map(item => item["volumeInfo"]["imageLinks"]["thumbnail"]);
  return (
    <div className="container">
      <div className="row">
        {imgUrls.map( url =>

        <div className='col-lg-4 col-md-6 col-sm-12' key={url}>
          <Book imageUrl={url} key={url} setSelectedImageUrl={setSelectedImageUrl}/>
        </div>

          ) }
      </div>
    </div>
  );
};

export default BookList;
