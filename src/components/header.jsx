import { Link, useLocation } from 'react-router-dom';
import { setSearch } from '../redux/features/others';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   const { search } = useSelector(store => store.others);

   function getColor(path) {
      if (path === pathname) return 'font-semibold';
      return '';
   }

   function handleSearch(event) {
      dispatch(setSearch(event.target.value));
   }

   return (
      <nav className='py-4 2xl:px-6'>
         <div className='container flex items-center justify-between'>
            <img src='/assets/icons/logo.svg' width='150px' className='object-contain' />
            <ul className='hidden md:flex items-center space-x-6'>
               <Link className={`cursor-pointer ${getColor('/')}`} to='/' id='lws-bookStore'>
                  <li>Book Store</li>
               </Link>
               <Link className={`cursor-pointer ${getColor('/add')}`} to='/add' id='lws-addBook'>
                  <li>Add Book</li>
               </Link>
            </ul>
            <form className='flex items-center' onSubmit={e => e.preventDefault()}>
               <div className='group relative rounded-md bg-white'>
                  <svg
                     width='20'
                     height='20'
                     fill='currentColor'
                     className='absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary'
                  >
                     <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                     ></path>
                  </svg>
                  <input
                     type='text'
                     placeholder='Filter books...'
                     className='search'
                     id='lws-search'
                     value={search}
                     onChange={handleSearch}
                  />
               </div>
            </form>
         </div>
      </nav>
   );
}
