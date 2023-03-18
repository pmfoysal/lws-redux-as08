import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setFilter, setSearch } from '../redux/features/others';
import { useAddBookMutation, useEditBookMutation, useGetBookQuery } from '../redux/features/books';

export default function Form({ mode }) {
   const { bookId } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [addBook, addApi] = useAddBookMutation();
   const [editBook, editApi] = useEditBookMutation();
   const { data: book } = useGetBookQuery(bookId, { skip: !bookId });

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [author, setAuthor] = useState('');
   const [rating, setRating] = useState('');
   const [thumbnail, setThumbnail] = useState('');
   const [featured, setFeatured] = useState(false);

   function handleSubmit(event) {
      event.preventDefault();
      const data = { name, author, price, thumbnail, rating, featured };
      if (mode === 'add')
         addBook(data).then(() => {
            dispatch(setSearch(''));
            dispatch(setFilter('all'));
            navigate('/');
         });
      else {
         data.id = bookId;
         editBook(data).then(() => {
            dispatch(setSearch(''));
            dispatch(setFilter('all'));
            navigate('/');
         });
      }
   }

   useEffect(() => {
      if (bookId && book?.id) {
         setName(book.name);
         setPrice(book.price);
         setAuthor(book.author);
         setRating(book.rating);
         setFeatured(book.featured);
         setThumbnail(book.thumbnail);
      }
   }, [bookId, book]);

   return (
      <form className='book-form' onSubmit={handleSubmit}>
         <div className='space-y-2'>
            <label htmlFor='lws-bookName'>Book Name</label>
            <input
               required
               className='text-input'
               type='text'
               id='lws-bookName'
               name='name'
               value={name}
               onChange={e => setName(e.target.value)}
            />
         </div>
         <div className='space-y-2'>
            <label htmlFor='lws-author'>Author</label>
            <input
               required
               className='text-input'
               type='text'
               id='lws-author'
               name='author'
               value={author}
               onChange={e => setAuthor(e.target.value)}
            />
         </div>
         <div className='space-y-2'>
            <label htmlFor='lws-thumbnail'>Image Url</label>
            <input
               required
               className='text-input'
               type='text'
               id='lws-thumbnail'
               name='thumbnail'
               value={thumbnail}
               onChange={e => setThumbnail(e.target.value)}
            />
         </div>
         <div className='grid grid-cols-2 gap-8 pb-4'>
            <div className='space-y-2'>
               <label htmlFor='lws-price'>Price</label>
               <input
                  required
                  className='text-input'
                  type='number'
                  id='lws-price'
                  name='price'
                  step='any'
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
               />
            </div>
            <div className='space-y-2'>
               <label htmlFor='lws-rating'>Rating</label>
               <input
                  required
                  className='text-input'
                  type='number'
                  id='lws-rating'
                  name='rating'
                  min='1'
                  max='5'
                  value={rating}
                  onChange={e => setRating(Number(e.target.value))}
               />
            </div>
         </div>
         <div className='flex items-center'>
            <input
               id='lws-featured'
               type='checkbox'
               name='featured'
               className='w-4 h-4'
               checked={featured}
               onChange={e => setFeatured(e.target.checked)}
            />
            <label htmlFor='lws-featured' className='ml-2 text-sm'>
               This is a featured book
            </label>
         </div>
         <button type='submit' className='submit' id='lws-submit' disabled={addApi.isLoading || editApi.isLoading}>
            {mode === 'add' ? 'Add Book' : 'Edit Book'}
         </button>
      </form>
   );
}
