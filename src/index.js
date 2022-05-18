// This is an ES6 module that will be imported for use
import React from 'react';
import ReactDOM from 'react-dom/client';

// Load CSS
import './index.css'

var books = [
  {
    "key": "dr-seuss-oh-the-places-youll-go",
    "title": "Oh, the Places You'll Go!",
    "author": "Dr. Seuss",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    "sales": "12675"
  },
  {
    "key": "richard-dawkins-the-god-delusion",
    "title": "The God Delusion",
    "author": "Richard Dawkins",
    "img": "https://m.media-amazon.com/images/I/4116f7PEq8L._SY346_.jpg",
    "sales": "9473"
  },
  {
    "key": "michael-watkins-the-first-90-days",
    "title": "The First 90 Days",
    "author": "Michael D. Watkins",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51suqb0FigL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    "sales": "6731"
  },
  {
    "key": "harlan-ellison-vic-and-blood",
    "title": "Vic and Blood",
    "author": "Harlan Ellison",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61bHjXIjH3L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    "sales": "614"
  },
  {
    "key": "rob-colton-timber-pack-chronicles",
    "title": "Timber Pack Chronicles",
    "author": "Rob Colton",
    "img": "https://m.media-amazon.com/images/I/51C6pWeu6NL.jpg",
    "sales": "496"
  }
];

// React module function names must be capitalized
// This is a stateless functional component
// They must always return JSX, even if it's just empty HTML

function BookList(props) {
  
  let bookList = [];
  
  props.books.forEach((book) => {
    
    // Destructure the incoming props into their own variables
    // so you don't have to refer to them as props.xxx
    
    // This is similar to WP's extract(shortcode_atts()) feature

    const {
      key,
      title,
      author,
      img,
      sales
    } = book;
  
    bookList.push(
      <Book
        key={key}
        title={title}
        author={author}
        img={img}
        sales={sales}
      />);
  });

  // Remember, when returning something there must be a root node.
  // You can't return multiple sibling tags, there must be a single parent.

  return <div className='container'>

    <h1 className='title'>Gaelan's book store</h1>

    <section className='booklist'>
      {bookList}
    </section>

    </div>
}

function Book(props) {

  // Destructure the incoming props into their own variables

  const {
    title,
    author,
    img,
    sales
  } = props;

  return <article className='book'>

    {/* Return content using the output of a function/component */}
    <Image img={img} title={title} />
    
    {/* Echo content simply */}
    <h3>{title}</h3>
    <p>{author}</p>

    <Sold sales={sales} />

  </article>;
}

function Image(props) {

  // Destructure the incoming props into their own variables

  const {
    title,
    img
  } = props;

  let alt = "Book cover for '" + title + "'";
  return <div className='imgContainer'>
    <img
      src={img}
      alt={alt}
      title={alt}
      style={{
        height: '284px',
        maxWidth: '220px'}}
    />
  </div>
}

function Sold(props) {
  let sold = new Intl.NumberFormat().format(props.sales);
  return <p className='small'>{sold} sold</p>
}

// Get the root DOM element that will be used to store the entire interface
const root = ReactDOM.createRoot(document.getElementById('root'));

// Components must be either a:
// 1. Closed, matched tag (<Greeting></Greeting>)
// 2. Self-closing tag (<Greeting/>)

root.render(
  <BookList books={books} />
);

