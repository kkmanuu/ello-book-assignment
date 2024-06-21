import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button, Typography } from '@mui/material';
import { addBookToReadingList } from '../features/books/booksSlice';

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const readingList = useSelector((state) => state.books.readingList);

  const handleAddBook = (book) => {
    if (!readingList.some(b => b.title === book.title)) {
      dispatch(addBookToReadingList(book));
    }
  };

  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={book.coverPhotoURL}
              alt={`${book.title} cover`}
              style={{ width: '50px', height: '75px', marginRight: '15px' }}
            />
            <div>
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="subtitle1">{book.author}</Typography>
            </div>
          </div>
          <Button variant="contained" color="primary" onClick={() => handleAddBook(book)}>
            Add to Reading List
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
