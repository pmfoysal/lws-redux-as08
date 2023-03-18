import { setFilter } from '../redux/features/others';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
   const dispatch = useDispatch();
   const { filter } = useSelector(store => store.others);

   function handleFilter(value) {
      dispatch(setFilter(value));
   }

   function getColor(value) {
      if (filter === value) return 'active-filter';
      return '';
   }

   return (
      <div className='flex items-center justify-between mb-12'>
         <h4 className='mt-2 text-xl font-bold'>Book List</h4>
         <div className='flex items-center space-x-4'>
            <button className={`lws-filter-btn ${getColor('all')}`} onClick={() => handleFilter('all')}>
               All
            </button>
            <button className={`lws-filter-btn ${getColor('featured')}`} onClick={() => handleFilter('featured')}>
               Featured
            </button>
         </div>
      </div>
   );
}
