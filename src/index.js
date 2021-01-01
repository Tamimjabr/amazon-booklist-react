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
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author.toUpperCase()}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi dignissimos, consequuntur quo id et. Voluptatem tenetur earum quam quos!</Book>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author.toUpperCase()}/>
  </section>
  )
}

// ! props.children is like slots in webcomponents

const Book =(props)=> {
  const {img,title,author}= props
  console.log(props)
  return(
    <article className='book'>
     <img src={img} alt="a bok"/>
     <h1>{title}</h1>
     <p>{author}</p>
     {props.children}
    </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById("root"));

