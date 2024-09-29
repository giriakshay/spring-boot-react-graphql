import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      publisher
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $publisher: String!) {
    addBook(title: $title, author: $author, publisher: $publisher) {
      id
      title
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: String!) {
    deleteBook(id: $id)
  }
`;
