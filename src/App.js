import { useEffect, useState } from 'react';
import { LibraryAPI } from './api/library';
import { BookList } from './components/BookList/BookList';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [bookResults, setBookResults] = useState([]);
  const [bookList, setBookList] = useState([]);

  const searchBooks = async (e) => {
    e.preventDefault();
    const bookTitle = searchValue.replaceAll(' ', '+');
    const searchResults = await LibraryAPI.searchBook(bookTitle);
    const booksArray = searchResults.docs;
    setBookResults(booksArray.slice(0, 5));
    // setBookResults(searchResults);
  };

  const getBookList = () => {
    setBookList(LibraryAPI.getBookList());
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const addBook = (a) => {
    console.log('click', a);
    const newBookList = [...bookList];
    newBookList.push(a);
    setBookList(newBookList);
  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <div className='container text-center p-3'>
      <div className='container text-center'>
        <form onSubmit={searchBooks}>
          <input type='text' onChange={handleChange} value={searchValue} />
          <button>Search</button>
        </form>
      </div>
      {bookResults.length > 0 ? (
        <BookList bookList={bookResults} onClick={addBook} />
      ) : (
        <div>No Book Was Searched</div>
      )}
      <BookList bookList={bookList} />
    </div>
  );
}

export default App;
