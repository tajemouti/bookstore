import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksReducers } from './books/booksSlice';
import { categoriesReducer } from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksReducers,
  categories: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
