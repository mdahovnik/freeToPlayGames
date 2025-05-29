import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TPagination = {
  currentPage: number;
  pageSize: number;
}

const initialState: TPagination = {
  currentPage: 1,
  pageSize: 20,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    resetPagination: (state) => {
      state.currentPage = initialState.currentPage;
      state.pageSize = initialState.pageSize;
    }
  },
  extraReducers: () => {
  },
  selectors: {
    selectCurrentPage: (state) => state.currentPage,
    selectPageSize: (state) => state.pageSize
  }
})

export const {setCurrentPage, setPageSize, resetPagination} = paginationSlice.actions
export const {selectPageSize, selectCurrentPage} = paginationSlice.selectors;
export default paginationSlice.reducer;
