import Book from '../components/book';
import { useSelector } from 'react-redux';
import Filter from '../components/filter';
import { useGetBooksQuery } from '../redux/features/books';

export default function Home() {
   const { data: books } = useGetBooksQuery();
   const { search, filter } = useSelector(store => store.others);

   function filterBooks(item) {
      if (filter !== 'featured') return true;
      return item.featured;
   }

   function searchBooks(item) {
      return item.name.toLowerCase().includes(search.toLowerCase());
   }

   return (
      <main className='py-12 px-6 2xl:px-6 container'>
         <div className='order-2 xl:-order-1'>
            <Filter />
            <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
               {books
                  ?.filter(filterBooks)
                  ?.filter(searchBooks)
                  ?.map((item, index) => (
                     <Book key={`book-${index}`} {...item} />
                  ))}
            </div>
         </div>
      </main>
   );
}
