import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addBook({
      item_id: id, title, author, category: '',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Book title" value={title} onChange={handleTitleChange} />
      <input type="text" placeholder="Author" value={author} onChange={handleAuthorChange} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
