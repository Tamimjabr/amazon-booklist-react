import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

// setup vars
const firstBook={
  img:"https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL480_FMwebp_QL65_.jpg",
  title:'I Love You to the Moon and Back',
  author:'Amelia Hepworth'
}
const secondBook={
  img:"https://m.media-amazon.com/images/I/61VsXzoAfDL._AC_UL480_FMwebp_QL65_.jpg",
  title:'What If?: Serious Scientific Answers to Absurd Hypothetical Questions',
  author:'Randall Munroe'
}

function BookList() {
  return (
  <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author.toUpperCase()}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author.toUpperCase()}/>
  </section>
  )
}



const Book =(props)=> {
  console.log(props)
  return(
    <article className='book'>
     <img src={props.img} alt="a bok"/>
     <h1>{props.title}</h1>
     <p>{props.author}</p>
    </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById("root"));

