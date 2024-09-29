// src/BookList.js
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOOKS, DELETE_BOOK } from "./graphql";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }], // Refetch books after deletion
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleDelete = async (id) => {
    try {
      await deleteBook({ variables: { id } });
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} (Publisher:{" "}
            {book.publisher})
            <button
              onClick={() => handleDelete(book.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
