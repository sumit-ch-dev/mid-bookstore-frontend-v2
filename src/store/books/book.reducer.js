import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiInstance from '../../api/apiInstance';


const initialState = {
    books: [],
    status: 'idle',
    error: null
};


export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    try {
        const response = await apiInstance.get("/books");
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(fetchBooks.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.books = action.payload;
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
}
})




export default bookSlice.reducer;

export const selectAllBooks = (state) => state.book.books.results;











