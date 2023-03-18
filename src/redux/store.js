import books from './features/books';
import others from './features/others';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
   reducer: {
      others,
      [books.reducerPath]: books.reducer,
   },
   middleware: defaults => [...defaults(), books.middleware],
});
