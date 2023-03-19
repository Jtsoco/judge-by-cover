import React from 'react';
import Book from "./Book";


const BookList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-lg-4 col-md-6 col-sm-12'>

          <Book imageUrl="https://books.google.co.jp/books/content?id=6euuGTGqRz8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE709PE7hH1s-4ppDGHaOh67lgfq5DF7Tn_tjPSConXHW34wBf0Ude61UwA9-qwNPibFTm0Des7qkzpTFzZqhAg-gQAArq1CD-e5Z1H1Q1Vy4JSx3hcSC54oLjOIB5MFbkBe4pmqP"/>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>

          <Book imageUrl="https://books.google.co.jp/books/content?id=hRqWPwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7180OTIFEto_ZZ8FkVpg3mZchk5K644LKeLMibGhFjbDe9IWHbjDBk6fMADiArxr9YZi9YSL8-9SgR2XEMOfVTPoVSkXt4Ckx3Ai3eo0qTwxC1xjN300LJioZW0LDDHOvDF5P53"/>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>

          <Book imageUrl="https://books.google.co.jp/books/content?id=hRqWPwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7180OTIFEto_ZZ8FkVpg3mZchk5K644LKeLMibGhFjbDe9IWHbjDBk6fMADiArxr9YZi9YSL8-9SgR2XEMOfVTPoVSkXt4Ckx3Ai3eo0qTwxC1xjN300LJioZW0LDDHOvDF5P53"/>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>

          <Book imageUrl="https://books.google.co.jp/books/content?id=hRqWPwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7180OTIFEto_ZZ8FkVpg3mZchk5K644LKeLMibGhFjbDe9IWHbjDBk6fMADiArxr9YZi9YSL8-9SgR2XEMOfVTPoVSkXt4Ckx3Ai3eo0qTwxC1xjN300LJioZW0LDDHOvDF5P53"/>
        </div>

      </div>
    </div>
  );
};

export default BookList;
