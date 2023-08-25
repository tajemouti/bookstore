import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const BooksPage = () => {
  const books = [
    { id: uuidv4(), title: 'The Great Gatsby', author: 'Scott Fitzgerald' },
    { id: uuidv4(), title: 'Moby Dick', author: 'Herman Melville' },
    { id: uuidv4(), title: 'War and Peace', author: 'Leo Tolstoy' },
    { id: uuidv4(), title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky' },
  ];

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BooksPage;
