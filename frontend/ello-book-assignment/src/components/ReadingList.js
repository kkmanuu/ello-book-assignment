import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button, Typography } from '@mui/material';
import { removeBook } from '../features/books/booksSlice';

const ReadingList = () => {
  const dispatch = useDispatch();
  const readingList = useSelector((state) => state.books.readingList);

  const handleRemoveBook = (title) => {
    dispatch(removeBook(title));
  };

  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>Reading List</Typography>
      <List>
        {readingList.map((book) => (
          <ListItem key={book.title} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flexGrow: 1 }}>
              <Typography variant="h6">{book.title}</Typography>
            </div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveBook(book.title)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ReadingList;
