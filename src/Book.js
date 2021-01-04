import React from 'react'


// ! props.children is like slots in webcomponents

const Book =(props)=> {
  const {img,title,author}= props
  console.log(props)

  const clickHandler=()=>{
    alert('hello')
  }
  const complexExample=(e, author1)=>{
    e.target.closest('.book').remove()
    console.log(e.target.closest('.book'))
    console.log(author1)
  }
  const handleMouseOver=(e)=>{
    console.log(e.target)
  }
  return(
    <article className='book'onMouseOver={(e)=>handleMouseOver(e)}>
     <img src={img} alt="a bok"/>
     <h3>{title}</h3>
     <p>{author}</p>
     {props.children?props.children:'no description'}
     <button type="button" className="btn btn-info" onClick={clickHandler}>Info</button>
     <button type="button" className="btn btn-danger" onClick={(e)=>complexExample(e,author)}>Delete</button>
    </article>
  )
}

export default Book