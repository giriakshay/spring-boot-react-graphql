// src/AddBook.js
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK, GET_BOOKS } from "./graphql";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  // Use mutation with refetchQueries to update the book list after adding a book
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook({ variables: { title, author, publisher } });
    setTitle("");
    setAuthor("");
    setPublisher("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Book</h3>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Publisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
