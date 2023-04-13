import React from "react";

const books = [
  { title: "폭풍의 언덕", isNovel: true, id: 1 },
  { title: "리액트 뽀개기", isNovel: false, id: 2 },
  { title: "노인과 바다", isNovel: true, id: 3}
];

const BookList = () => {
  const listItems = books.map(book => 
    <li key={book.id} style={{color: book.isNovel ? 'magenta' : 'blue'}}>
      {book.title}
    </li>
    );

    return (
      <ul>{listItems}</ul>
    );
}

export default BookList;


