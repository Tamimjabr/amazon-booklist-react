import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import {books} from './books'
import Book from './Book'


function BookList() {
  const newBooks = books.map(book=>{
    if(!book.description){
      return (
        <Book key={book.id} img={book.img} title={book.title} author={book.author}></Book>
      )
    }else{
      return <Book key={book.id} img={book.img} title={book.title} author={book.author}><p>{book.description}</p></Book>
    }

  })
  return (
  <section className='booklist'>
    {newBooks}
  </section>
  )
}


ReactDom.render(<BookList/>, document.getElementById("root"));

