import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//js setup
const comics =[
{
  id: 1,
  img: 'https://upload.wikimedia.org/wikipedia/en/c/cf/WalkingDead1.jpg',
  title: 'The Walking Dead',
  author: 'Robert Kirkman'
},
{
  id: 2,
  img: 'https://upload.wikimedia.org/wikipedia/en/c/cf/WalkingDead1.jpg',
  title: 'The Walking Dead Volume Two',
  author: 'Kirkman, Robert'
}
];



function BookList(){
  return ( 
  <section className="bookList">
    {comics.map((comic)=>{
    return (
      <Book key={comic.id} {...comic}></Book>
    ); 
  })}
  </section> 
  );
}

const Book = ({img, title, author}) => {
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
   <article className="book" onMouseOver={()=>{
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

ReactDOM.render(<BookList />, document.getElementById('root'));

//ReactDOM.render(<h2>Hello</h2>, document.getElementById('root'));
//ReactDOM.render(<index/>, document.getElementById('root'));


//Use "rafce" to quickly insert code, look at the extension for more
// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {}, 
//     React.createElement('h1', {}, 'hello world')
//   );
// };
// function BookList(){
//   return (
//   <div>
//     <Hello />
//     <Message />
//   </div>
//   )
// }

// const Hello = () => <h2>Hey hey hey</h2>;

// //Explicit return:
// const Message = () => {
//   return <p>Yo yo yo</p>;
// }

//////////////////////////////// Destructuring:
// const Book = ({title, author, img, children}) => {
//   //const {title, author, img } = props;
//   return (
//    <article className="book">
//       <img src={img} alt=''/>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };