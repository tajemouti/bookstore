const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const booksReducers = (state = [], action) => {
  const reducerMap = {
    ADD: () => [...state, action.book],
    REMOVE: () => state.filter((book) => book.id !== action.id),
  };

  const reducerFunction = reducerMap[action.type];
  return reducerFunction ? reducerFunction() : state;
};

const addBook = (book) => ({ type: ADD, book });
const removeBook = (id) => ({ type: REMOVE, id });

export { booksReducers, addBook, removeBook };
