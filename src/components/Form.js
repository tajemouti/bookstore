import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

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
      item_id: id,
      title,
      author,
      category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const categories = [
    'Action', 'Fiction', 'Thriller', 'Mystery', 'Adventure', 'Biography', 'Anthology', 'Other',
  ];

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Book title" value={title} onChange={handleTitleChange} required />
      <input type="text" placeholder="Author" value={author} onChange={handleAuthorChange} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="" disabled>Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
