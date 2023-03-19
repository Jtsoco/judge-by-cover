import React from 'react';
import Book from "./Book";


const BookList = (props) => {
  const { items, setSelectedImageUrl } = props;
  console.log(items);
  const filterOne = items.filter(item => "imageLinks" in item["volumeInfo"])
  const imgUrls = filterOne.map(item => item["volumeInfo"]["imageLinks"]["thumbnail"]);
  const imgUrlsBig = imgUrls.map(url => url.replace("zoom=1", "zoom=3"));
  return (
    <div className="container">
      <div className="row">
        {imgUrls.map( url =>

        <div className='col-lg-4 col-md-6 col-sm-12 mt-3' key={url}>
          <Book imageUrl={url} key={url} setSelectedImageUrl={setSelectedImageUrl}/>
        </div>

          ) }
      </div>
    </div>
  );
};

export default BookList;
