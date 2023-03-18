import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   search: '',
   filter: 'all',
};

const others = createSlice({
   name: 'others',
   initialState,
   reducers: {
      setSearch: (state, action) => {
         state.search = action.payload;
      },
      setFilter: (state, action) => {
         state.filter = action.payload;
      },
   },
});

export default others.reducer;
export const { setSearch, setFilter } = others.actions;
