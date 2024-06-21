// src/components/SearchBar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, List, ListItem } from '@mui/material';
import { setSearchTerm } from '../features/books/booksSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.books.searchTerm);

  return (
    <TextField
      label="Search for books"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default SearchBar;
