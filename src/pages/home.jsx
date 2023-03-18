import Book from '../components/book';
import Filter from '../components/filter';

export default function Home() {
   return (
      <main class='py-12 px-6 2xl:px-6 container'>
         <div class='order-2 xl:-order-1'>
            <Filter />
            <div class='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
               <Book />
            </div>
         </div>
      </main>
   );
}
