import React from 'react';

const SelectedBookImage = (props) => {
  const {url} = props;
  return (
    <div>
            <img src={url} alt="a book" className='img-fluid selected-book-actual'/>

    </div>
  );
};

export default SelectedBookImage;
