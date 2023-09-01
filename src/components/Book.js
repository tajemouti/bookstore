import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <div className="left-block">
        <div className="book-info">
          <span className="category">{category}</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="list-btn">
          <button type="button">Comments </button>
          |
          <button
            type="button"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
          |
          <button type="button">Edit</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
