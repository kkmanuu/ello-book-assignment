// src/features/books/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  readingList: [],
  searchTerm: ''
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToReadingList(state, action) {
      state.readingList.push(action.payload);
    },
    removeBook(state, action) {
      state.readingList = state.readingList.filter(book => book.title !== action.payload);
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addBookToReadingList, removeBook, setSearchTerm } = booksSlice.actions;
export default booksSlice.reducer;
