import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

// setup vars
const books=[{
  id:1,
  img:"https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL480_FMwebp_QL65_.jpg",
  title:'I Love You to the Moon and Back',
  author:'Amelia Hepworth'
},
{
  id:2,
  img:"https://m.media-amazon.com/images/I/61VsXzoAfDL._AC_UL480_FMwebp_QL65_.jpg",
  title:'What If?: Serious Scientific Answers to Absurd Hypothetical Questions',
  author:'Randall Munroe'
},{
  id:3,
  img:"https://images-na.ssl-images-amazon.com/images/I/51Z30WGFVhL._SX486_BO1,204,203,200_.jpg",
  title:'Where\'s Spot?' ,
  author:'Eric Hill',
  description:'A lift-the-flap tale in which Spot\'s mum searches everywhere for little Spot.'
}]

function BookList() {
  const newBooks = books.map(book=>{
    if(!book.description){
      return (
        <Book key={book.id} img={book.img} title={book.title} author={book.title}></Book>
      )
    }else{
      return <Book key={book.id} img={book.img} title={book.title} author={book.title}><p>{book.description}</p></Book>
    }

  })
  return (
  <section className='booklist'>
    {newBooks}
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
     {props.children?props.children:'no description'}
    </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById("root"));

