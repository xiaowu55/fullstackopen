import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
query {
  allAuthors {
  name
  born
  bookCount
}
}
`

export const ALL_BOOKS = gql`
query AllBooks {
  allBooks {
    author
    title
    published
  }
}
`

export const ADD_BOOK = gql`
mutation($title: String!, $author: String!, $published: Int!, $genres: [String]!) {
  addBook(
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
  ) {
    title,
    author
  }
}
`

export const EDIT_AUTHOR = gql`
mutation EditAuthor($setBornTo: Int!, $name: String!) {
  editAuthor(setBornTo: $setBornTo, name: $name) {
    name
    born
  }
}
`