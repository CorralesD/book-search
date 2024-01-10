export const BookList = (props) => {
  return (
    <div className='container text-center'>
      {props.bookList ? (
        <div className='row'>
          {props.bookList.map((book, index) => {
            const addBook = () => {
              props.onClick(book);
            };
            return (
              <div className='col' key={index + book.key}>
                <div onClick={addBook}>
                  <div>{book.title}</div>
                  <img
                    src={`//covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt='Cover Art'
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Search for Books to Add</div>
      )}
    </div>
  );
};
