import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksPage from './components/BooksPage';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
