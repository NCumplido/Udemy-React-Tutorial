import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList(){
  return <section className="bookList"> 
    <Book />
  </section>;
  
}

const Book = () => {
  const title = 'The Walking Dead';
  const author = 'Robert Kirkman';
  return (
   <article className="book">
      <h1>{title}</h1>
      <h4>{author}</h4>
      <img src="https://upload.wikimedia.org/wikipedia/en/c/cf/WalkingDead1.jpg" alt="Grocery Basket" />
      <p></p>
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