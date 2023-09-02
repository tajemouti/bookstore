import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <header>
      <nav className="navbar">
        <h2 className="logo">Bookstore CMS</h2>
        <ul>
          <li className="books-link">
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li className="categories">
            <NavLink to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <img src="" alt="Avatar" />
      </div>
    </header>
    <hr className="line" />
  </>
);

export default Header;
