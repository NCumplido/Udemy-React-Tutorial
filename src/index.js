import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

import {comics} from './comics'
import Comic from './Comic' //I can rename "Comic" to whatever but that is what is being referenced in this file

function ComicList(){
  return ( 
  <section className="comicList">
    {comics.map((comic)=>{
    return (
      <Comic key={comic.id} {...comic}></Comic>
    ); 
  })}
  </section> 
  );
}

ReactDOM.render(<ComicList />, document.getElementById('root'));

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