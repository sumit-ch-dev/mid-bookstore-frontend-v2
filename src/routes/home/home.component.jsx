import { Outlet } from "react-router-dom";
import { useState } from "react";
import Directory from "../../components/directory/directory.component";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, selectAllBooks } from "../../store/books/book.reducer";
// import { selectBookList } from "../../store/books/book.selector";

// import { selectAllBooks } from "../../store/books/book.selector";

const Home = () => {
  // console.log(books)
  // const books = useSelector(state => state.book.books)
  // // const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks) 
  const bookStatus = useSelector(state => state.book.status)

  useEffect(() => {
    if(bookStatus === 'idle') {

      dispatch(fetchBooks());
    }
  },[bookStatus, dispatch] )
  // const bookStatus = useSelector(state => state.books.status)

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/books")
  //     .then((response) => {
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .then((data) => setBooks(data.results))
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((response) => {
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .then((data) => setBooks(data.products))
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   if(bookStatus === 'idle') {

  //     dispatch(fetchBooks());
  //   }
  // }, [bookStatus, dispatch]);

  // const books = useSelector(selectBookList);

  return (
    <div>
      <Directory books={books} />
      <Outlet />
    </div>
  );
};

export default Home;
