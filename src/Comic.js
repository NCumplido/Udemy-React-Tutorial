import React from 'react'

const Comic = ({img, title, author}) => {
  // attribute, eventhandler
  // onClick onMouseOver
  const clickHandler = (e) =>{
    console.log("Event: ", e); //This is how we can log event info
    console.log("Event target: ", e.target);
    
    console.log("Button click");
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
   <article className="comic" onMouseOver={()=>{
    console.log(title);
   }}>
      <img src={img} alt=''/>
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Button for clicking
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  );
};

export default Comic //Only one default export