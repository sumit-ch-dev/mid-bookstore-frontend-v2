import BookItem from "../bookItem/bookItem.component";
import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBooks,fetchBooks } from "../../store/books/book.reducer";
import { DirectoryContainer, Title } from "./directory.styles";

const Directory = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks) 
  const bookStatus = useSelector(state => state.book.status)


  useEffect(() => {
    if(bookStatus === 'idle') {

      dispatch(fetchBooks());
    }
  },[bookStatus, dispatch] )
  console.log(books);
  return (
    <Fragment>
      <Title>Top 10 Books</Title>
      <DirectoryContainer>
        {books &&
          books
            .filter((_, index) => index < 10)
            .map((book) => <BookItem key={book._id} book={book} />)}
      </DirectoryContainer>
    </Fragment>
  );
};

export default Directory;
