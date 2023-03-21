import logo from './logo.svg';
import './App.css';
import Book from "./components/Book";
import Search from "./components/Search";
import BookList from "./components/BookList";
import SelectedBook from './components/SelectedBook';
import { useState } from 'react';



function App() {
  const basicItems = {}
  const basicItemss = [
    {
      "kind": "books#volume",
      "id": "QCPBDwAAQBAJ",
      "etag": "kCE+YZMGFYg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/QCPBDwAAQBAJ",
      "volumeInfo": {
        "title": "Rhythm of War",
        "subtitle": "Book Four of The Stormlight Archive",
        "authors": [
          "Brandon Sanderson"
        ],
        "publisher": "Tor Books",
        "publishedDate": "2020-11-17",
        "description": "An instant #1 New York Times Bestseller and a USA Today and Indie Bestseller! The Stormlight Archive saga continues in Rhythm of War, the eagerly awaited sequel to Brandon Sanderson's #1 New York Times bestselling Oathbringer, from an epic fantasy writer at the top of his game. After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar’s crafty ally Taravangian looms over every strategic move. Now, as new technological discoveries by Navani Kholin’s scholars begin to change the face of the war, the enemy prepares a bold and dangerous operation. The arms race that follows will challenge the very core of the Radiant ideals, and potentially reveal the secrets of the ancient tower that was once the heart of their strength. At the same time that Kaladin Stormblessed must come to grips with his changing role within the Knights Radiant, his Windrunners face their own problem: As more and more deadly enemy Fused awaken to wage war, no more honorspren are willing to bond with humans to increase the number of Radiants. Adolin and Shallan must lead the coalition’s envoy to the honorspren stronghold of Lasting Integrity and either convince the spren to join the cause against the evil god Odium, or personally face the storm of failure. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer Rhythm of War The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781429952040"
          },
          {
            "type": "ISBN_10",
            "identifier": "1429952040"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 1374,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "averageRating": 4,
        "ratingsCount": 12,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.14.11.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=QCPBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=QCPBDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.jp/books?id=QCPBDwAAQBAJ&printsec=frontcover&dq=stormlight&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=QCPBDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=QCPBDwAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 3220,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 2898,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=QCPBDwAAQBAJ&rdid=book-QCPBDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3220000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 2898000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=QCPBDwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer Rhythm of War The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "VsT3DQAAQBAJ",
      "etag": "zzPMLLlF8pI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/VsT3DQAAQBAJ",
      "volumeInfo": {
        "title": "Oathbringer",
        "subtitle": "Book Three of the Stormlight Archive",
        "authors": [
          "Brandon Sanderson"
        ],
        "publisher": "Tor Books",
        "publishedDate": "2017-11-14",
        "description": "The #1 New York Times bestselling sequel to Words of Radiance, from epic fantasy author Brandon Sanderson at the top of his game. In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe with numbers as great as their thirst for vengeance. Dalinar Kholin’s Alethi armies won a fleeting victory at a terrible cost: The enemy Parshendi summoned the violent Everstorm, which now sweeps the world with destruction, and in its passing awakens the once peaceful and subservient parshmen to the horror of their millennia-long enslavement by humans. While on a desperate flight to warn his family of the threat, Kaladin Stormblessed must come to grips with the fact that the newly kindled anger of the parshmen may be wholly justified. Nestled in the mountains high above the storms, in the tower city of Urithiru, Shallan Davar investigates the wonders of the ancient stronghold of the Knights Radiant and unearths dark secrets lurking in its depths. And Dalinar realizes that his holy mission to unite his homeland of Alethkar was too narrow in scope. Unless all the nations of Roshar can put aside Dalinar’s blood-soaked past and stand together—and unless Dalinar himself can confront that past—even the restoration of the Knights Radiant will not prevent the end of civilization. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780765399830"
          },
          {
            "type": "ISBN_10",
            "identifier": "0765399830"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 1248,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "averageRating": 4,
        "ratingsCount": 24,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.19.19.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=VsT3DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=VsT3DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.jp/books?id=VsT3DQAAQBAJ&printsec=frontcover&dq=stormlight&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=VsT3DQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=VsT3DQAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 1337,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 1203,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=VsT3DQAAQBAJ&rdid=book-VsT3DQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1337000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 1203000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=VsT3DQAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The ..."
      }
    }
    ];
  // function firstGoogleSearch(term) {
  //  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`)
  // .then(res => res.json())
  // .then(
  //   (result) => {
  //     console.log(result["items"]);
  //      return result["items"]
  //   }
  // );
  // };
  let firstBook = {
    title: "Peace",
    authors: [
      "Gene Wolfe"
    ],
    description: "Hailed as \"one of the literary giants of SF\" by the Denver Post, Gene Wolfe has repeatedly won the field's highest honors, including the Nebula, the Hugo, and the World Fantasy awards. Peace is Gene Wolfe's first full-length novel, a work that shows the genius that later flourished in such acclaimed works as The Fifth Head of Cerberus and The Book of The New Sun. Originally published in 1975, Peace is a spellbinding, brilliant tour de force of the imagination. The melancholy memoir of Alden Dennis Weer, an embittered old man living out his last days in a small midwestern town, the novel reveals a miraculous dimension as the narrative unfolds. For Weer's imagination has the power to obliterate time and reshape reality, transcending even death itself. Powerfully moving and uncompromisingly honest, Peace ranks alongside the finest literary works of our time.",
    thumbnail: "http://books.google.com/books/content?id=p9J8tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_apihttp://books.google.com/books/content?id=p9J8tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    infoLink: "http://books.google.co.jp/books?id=p9J8tgAACAAJ&dq=peace+gene+wolfe&hl=&source=gbs_api"

  };
  // let basicItems = [
  //   {"volumeInfo": {
  //     "imageLinks": {
  //       "thumbnail": "https://books.google.co.jp/books/publisher/content?id=kYjqAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72f5mK36SG4mRNfk4Q-RzrK24ssmIDK586NhtcZAMVio8xXOpPRzJUVsHgXhn_oPVG_Mq-MPZveu3a9zkb4Bqp3xv8-GYWHsKFtAhFZA04yyGeJ_whPYMcsWFWqSrZkKX3wCeQn"
  //     }
  //   }}
  // ];
  const imageUrl="https://books.google.co.jp/books/content?id=6euuGTGqRz8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE709PE7hH1s-4ppDGHaOh67lgfq5DF7Tn_tjPSConXHW34wBf0Ude61UwA9-qwNPibFTm0Des7qkzpTFzZqhAg-gQAArq1CD-e5Z1H1Q1Vy4JSx3hcSC54oLjOIB5MFbkBe4pmqP";
  // const selectedImageUrl = imageUrl;
  const [selectedBookObject, setSelectedBookObject] = useState(firstBook);
  // setSelectedImageUrl("");
  // const [imageUrls, setImageUrls] = useState(imageUrlsArr);
  const [items, setItems] = useState(basicItems);
  function googleSearch(term) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result["items"])
          if (result["totalItems"] >= 1) {
            setItems({});
            setItems(result["items"]);
          }
        }
      )
  };
  return (
    <div className="container">
      <div className="row">

        <div className='col-6 d-flex flex-column align-items-center'>

          <Search googleSearch={googleSearch} />
          <div className='selected-book'>
          {/* TODO: add a small image and large image button to the special book
          also add the info for extra book stuff, like author and title */}
          <SelectedBook bookObject={selectedBookObject} setSelectedBookObject={setSelectedBookObject}/>
          </div>
        </div>
        <div className='col-6'>
          <BookList items={items} setSelectedBookObject={setSelectedBookObject}/>
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header"> */}
{/* </header> */}
