import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { GET_BOOKS } from './graphql/queries';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import './App.css';

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const searchTerm = useSelector((state) => state.books.searchTerm);

  if (loading) return <Typography className="loading">Loading...</Typography>;
  if (error) return <Typography className="error">Error :(</Typography>;

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="container">
      <Typography variant="h3" className="header">Book App</Typography>
      <SearchBar />
      <BookList books={filteredBooks} />
      <ReadingList />
    </Container>
  );
};

export default App;
