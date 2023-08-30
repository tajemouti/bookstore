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
    <li>
      <p>
        <span>Book title :</span>
        {title}
      </p>
      <div>
        <p>
          <span>Author :</span>
          {author}
        </p>
        <p>
          <span>Category :</span>
          {category}
        </p>
        <button type="button" onClick={handleRemoveClick}>
          Remove
        </button>
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
