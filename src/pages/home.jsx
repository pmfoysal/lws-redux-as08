import Book from '../components/book';
import Filter from '../components/filter';

export default function Home() {
   return (
      <main className='py-12 px-6 2xl:px-6 container'>
         <div className='order-2 xl:-order-1'>
            <Filter />
            <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
               <Book />
            </div>
         </div>
      </main>
   );
}
