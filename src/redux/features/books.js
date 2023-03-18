import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const books = createApi({
   reducerPath: 'books',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
   tagTypes: ['books', 'book'],
   endpoints: builder => ({
      getBooks: builder.query({
         query: () => '/books',
         providesTags: ['books'],
      }),
      getBook: builder.query({
         query: id => `/books/${id}`,
         providesTags: (...args) => [{ type: 'book', id: args[2] }],
      }),
      addBook: builder.mutation({
         query: data => ({
            url: '/books',
            method: 'POST',
            body: data,
         }),
         invalidatesTags: ['books'],
      }),
      editBook: builder.mutation({
         query: ({ id, ...data }) => ({
            url: `/books/${id}`,
            method: 'PATCH',
            body: data,
         }),
         invalidatesTags: (...args) => ['books', { type: 'book', id: args[2].id }],
      }),
      deleteBook: builder.mutation({
         query: id => ({
            url: `/books/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: (...args) => ['books', { type: 'book', id: args[2] }],
      }),
   }),
});

export default books;
export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation, useEditBookMutation, useDeleteBookMutation } = books;
