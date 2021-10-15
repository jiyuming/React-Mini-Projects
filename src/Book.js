import React from 'react'

const Book = ({img, title, author}) => {
    //let {img, title, author} = props;

    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
    }

    return (
    <article className="book">
        <img src={img} alt=''/>
        <h1>{title}</h1>
        <h4>{author}</h4>  
        {/* <button type='button' onClick={clickHandler}></button> */}
    </article>
    ); 
}

export default Book
